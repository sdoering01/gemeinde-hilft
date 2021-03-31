import { knex as knexImport } from 'knex';

declare module 'knex/types/tables' {
    export interface HelpRequest {
        id: number;
        email: string;
        name: string;
        title: string;
        description?: string;
        token: string;
        createdAt: Date;
    }

    interface Tables {
        helpRequests: HelpRequest;
    }
}

export const knex = knexImport(require('../../knexfile'));
