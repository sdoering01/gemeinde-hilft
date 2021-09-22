import { createTransport } from 'nodemailer';

import { mailHost, mailPort, mailUser, mailPass } from '../config';
import { MailOptions } from './sendMail';

const transport = createTransport({
    host: mailHost,
    port: mailPort,
    // only true for port 465
    secure: mailPort === 465,
    auth: {
        user: mailUser,
        pass: mailPass
    }
});

export const sendMailProd = (mailOptions: MailOptions) => {
    transport.sendMail(mailOptions);
};
