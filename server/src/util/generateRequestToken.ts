import crypto from 'crypto';

/** Generates 256-bit url-safe token */
export const generateRequestToken = () =>
    crypto
        .randomBytes(32)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/\=/g, '~');
