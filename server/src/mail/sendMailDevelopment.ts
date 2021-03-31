import { MailOptions } from './sendMail';
import { createTransport } from 'nodemailer';

// In development mailhog is used, which accepts any emails
// without requiring auth details
const transport = createTransport({
    host: 'localhost',
    port: 1025,
    secure: false
});

export const sendMailDev = (mailOptions: MailOptions) => {
    transport.sendMail(mailOptions);
};
