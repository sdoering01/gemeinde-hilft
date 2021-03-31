import { Router, Request, Response, NextFunction } from 'express';

import helpRoutes from './help/helpRoutes';
import { passwordMiddleware } from '../auth/passwordMiddleware';

const router = Router();

router.use('/help', helpRoutes);

router.post('/checkPassword', [
    passwordMiddleware,
    (_req: Request, res: Response, _next: NextFunction) => {
        res.status(200).send();
    }
]);

export default router;
