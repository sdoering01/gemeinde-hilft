import { Router } from 'express';

import helpRoutes from './help/helpRoutes';

const router = Router();

router.use('/help', helpRoutes);

export default router;
