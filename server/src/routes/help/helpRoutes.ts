import { Router } from 'express';

import offersRoutes from './offers/offersRoutes';
import requestsRoutes from './requests/requestsRoutes';
import { validatorMiddleware } from '../../util/validatorMiddleware';
import schema from './schema';
import { asyncHandler } from '../../util/asyncHandler';
import { passwordMiddleware } from '../../auth/passwordMiddleware';
import { HelpRequestRepo } from '../../database/repository/HelpRequestRepo';
import { sendEditMail } from '../../mail/templates/sendEditMail';

const router = Router();

// Use two seperates routes to make future extensions easier
router.use('/offers', offersRoutes);
router.use('/requests', requestsRoutes);

router.post('/resendTokens', [
    passwordMiddleware,
    validatorMiddleware(schema.email),
    asyncHandler(async (req, res, _next) => {
        const helpRequests = await HelpRequestRepo.getByEmailWithToken(
            req.body.email
        );
        // TODO: add helpOffers

        res.status(202).send(
            'Eine E-Mail mit den Hilfeanfragen und -angeboten wird an die angegebene E-Mail-Adresse geschickt.'
        );

        await sendEditMail(req.body.email, helpRequests);
    })
]);

export default router;
