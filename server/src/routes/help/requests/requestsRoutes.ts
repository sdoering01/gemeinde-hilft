import { Router, Request, Response, NextFunction } from 'express';
import _ from 'lodash';

import {
    ValidationSource,
    validatorMiddleware
} from '../../../util/validatorMiddleware';
import { asyncHandler } from '../../../util/asyncHandler';
import schema from './schema';
import { HelpRequestRepo } from '../../../database/repository/HelpRequestRepo';
import { passwordMiddleware } from '../../../auth/passwordMiddleware';
import { HttpError } from '../../../util/HttpError';
import { sendHelpRequestContactMail } from '../../../mail/templates/sendHelpRequestContactMail';

const helpRequestTokenValidator = asyncHandler(async (req, _res, next) => {
    const id = +req.params.id;
    const helpToken = req.headers['x-help-token'] as string;
    const helpRequest = await HelpRequestRepo.getByIdWithToken(id);

    if (!helpRequest) {
        return next(
            new HttpError(404, 'Hilfeanfrage konnte nicht gefunden werden')
        );
    }

    if (helpRequest.token !== helpToken) {
        return next(new HttpError(403, 'Falscher Token für die Hilfeanfrage'));
    }

    req.helpRequest = _.omit(helpRequest, 'token');
    next();
});

const tokenProtectedRouter = Router();

tokenProtectedRouter.get('/:id', [
    validatorMiddleware(schema.helpRequestId, ValidationSource.PARAM),
    validatorMiddleware(schema.helpRequestToken, ValidationSource.HEADER),
    helpRequestTokenValidator,
    (req: Request, res: Response, _next: NextFunction) => {
        res.status(200).json(req.helpRequest);
    }
]);

tokenProtectedRouter.patch('/:id', [
    validatorMiddleware(schema.helpRequestId, ValidationSource.PARAM),
    validatorMiddleware(schema.helpRequestToken, ValidationSource.HEADER),
    helpRequestTokenValidator,
    validatorMiddleware(schema.helpRequestEdit),
    asyncHandler(async (req, res, _next) => {
        const helpRequestEdit = req.body;
        const newHelpRequest = await HelpRequestRepo.updateById(
            req.helpRequest.id,
            helpRequestEdit
        );
        res.status(200).json(newHelpRequest);
    })
]);

tokenProtectedRouter.delete('/:id', [
    validatorMiddleware(schema.helpRequestId, ValidationSource.PARAM),
    validatorMiddleware(schema.helpRequestToken, ValidationSource.HEADER),
    helpRequestTokenValidator,
    asyncHandler(async (req, res, _next) => {
        await HelpRequestRepo.deleteById(req.helpRequest.id);
        return res.status(200).send();
    })
]);

const passwordProtectedRouter = Router();

passwordProtectedRouter.get(
    '/',
    asyncHandler(async (_req, res, _next) => {
        const helpRequests = await HelpRequestRepo.getAll();
        res.status(200).json(helpRequests);
    })
);

passwordProtectedRouter.post('/', [
    validatorMiddleware(schema.helpRequest),
    asyncHandler(async (req, res, _next) => {
        const helpRequest = req.body;
        helpRequest.email = helpRequest.email.toLowerCase();

        if (!helpRequest.name) helpRequest.name = 'Anonym';

        const createdHelpRequest = await HelpRequestRepo.create(helpRequest);
        res.status(201).json(createdHelpRequest);
    })
]);

passwordProtectedRouter.post('/:id/contact', [
    validatorMiddleware(schema.helpRequestId, ValidationSource.PARAM),
    validatorMiddleware(schema.helpRequestContact),
    asyncHandler(async (req, res, next) => {
        const id = +req.params.id;
        const contactInformation = req.body;

        const helpRequest = await HelpRequestRepo.getByIdFull(id);

        if (!helpRequest) {
            return next(
                new HttpError(404, 'Hilfeanfrage konnte nicht gefunden werden')
            );
        }

        await sendHelpRequestContactMail(helpRequest, contactInformation);

        res.status(202).send();
    })
]);

const router = Router();

// Every route of the tokenProtectedRouter needs to explictly
// use the helpRequestTokenValidator so that routes with a
// similar scheme can be used as a password protected route
router.use(tokenProtectedRouter);

router.use(passwordMiddleware);
router.use(passwordProtectedRouter);

export default router;
