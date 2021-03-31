import { HelpRequest } from 'knex/types/tables';

declare module 'express-serve-static-core' {
    interface Request {
        helpRequest: Pick<
            HelpRequest,
            'id' | 'name' | 'title' | 'description' | 'createdAt'
        >;
    }
}
