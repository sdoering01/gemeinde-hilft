import ejs from 'ejs';

import { HelpRequest } from 'knex/types/tables';
import { editRequestRootUrl } from '../../config';
import { sendMail } from '../sendMail';

// TODO: add helpOffers
export const sendTokenMail = async (
    to: string,
    helpRequests: Pick<HelpRequest, 'id' | 'title' | 'token'>[],
    helpOffers: any = []
) => {
    const html = await ejs.renderFile(
        __dirname + '/../../../mailTemplates/tokenMail.ejs',
        {
            editRequestRootUrl,
            helpRequests,
            helpOffers
        }
    );

    sendMail({
        to,
        html,
        subject: 'Deine Anfrage von Gemeinde hilft'
    });
};
