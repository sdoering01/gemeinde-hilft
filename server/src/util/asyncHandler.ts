import { Request, Response, NextFunction } from 'express';

type AsyncRequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

/**
 * Wrapper for asynchronous request handlers.
 *
 * Asynchronous errors must be catched and passed to the next function explicitly
 */
export const asyncHandler = (handler: AsyncRequestHandler) => (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    handler(req, res, next).catch(next);
};
