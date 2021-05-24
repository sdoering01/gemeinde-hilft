import ejs from 'ejs';

import { HelpRequest } from 'knex/types/tables';
import { sendMail } from '../sendMail';
import { editRequestRootUrl } from '../../config';

export const sendHelpRequestContactMail = async (
    helpRequest: HelpRequest,
    contactInformation: {
        name: string;
        email: string;
        phone: string;
        additionalInformation: string;
    }
) => {
    const html = await ejs.renderFile(
        __dirname + '/../../../mailTemplates/helpRequestContactMail.ejs',
        {
            recipientName: helpRequest.name,
            helperName: contactInformation.name,
            requestTitle: helpRequest.title,
            email: contactInformation.email,
            phone: contactInformation.phone,
            additionalInformation: contactInformation.additionalInformation,
            id: helpRequest.id,
            token: helpRequest.token,
            editRequestRootUrl
        }
    );

    sendMail({
        to: helpRequest.email,
        subject: `Gemeinde hilft - ${contactInformation.name} möchte dir helfen`,
        html
    });
};
