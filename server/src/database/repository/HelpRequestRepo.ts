import { knex } from '../database';
import { HelpRequest } from 'knex/types/tables';
import { generateRequestToken } from '../../util/generateRequestToken';

export class HelpRequestRepo {
    static async create(helpRequest: HelpRequest) {
        helpRequest.token = generateRequestToken();

        const [createdHelpRequest] = await knex('helpRequests')
            .insert(helpRequest)
            .returning(['id', 'name', 'title', 'description', 'createdAt']);
        return createdHelpRequest;
    }

    static async getAll() {
        return knex('helpRequests').select(
            'id',
            'name',
            'title',
            'description',
            'createdAt'
        );
    }

    static async getByIdWithToken(id: number) {
        return knex('helpRequests')
            .select('id', 'name', 'title', 'description', 'createdAt', 'token')
            .where('id', id)
            .first();
    }

    static async getByEmailWithToken(email: string) {
        return knex('helpRequests')
            .select('id', 'title', 'token')
            .where('email', email);
    }

    static async updateById(
        id: number,
        helpRequestEdit: Pick<HelpRequest, 'title' | 'description'>
    ) {
        const [updatedHelpRequest] = await knex('helpRequests')
            .update(helpRequestEdit)
            .where('id', id)
            .returning(['id', 'name', 'title', 'description', 'createdAt']);
        return updatedHelpRequest;
    }

    static async deleteById(id: number) {
        return knex('helpRequests').delete().where('id', id);
    }
}
