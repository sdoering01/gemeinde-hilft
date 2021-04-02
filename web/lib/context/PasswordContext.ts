import { createContext, Dispatch } from 'react';

export const PasswordContext = createContext<{
    password: string | null;
    isLoggedIn: boolean;
    login: (password: string, remember: boolean) => void;
    logout: () => void;
}>({
    password: null,
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});
