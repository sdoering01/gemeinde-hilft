import { environment } from '../config';
import { sendMailDev } from './sendMailDevelopment';
import { sendMailProd } from './sendMailProduction';
import { mailFrom } from '../config';

export interface MailOptions {
    from?: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

export const sendMail = (mailOptions: MailOptions) => {
    if (!mailOptions.from) mailOptions.from = mailFrom;

    if (environment === 'production') {
        sendMailProd(mailOptions);
    } else {
        sendMailDev(mailOptions);
    }
};
