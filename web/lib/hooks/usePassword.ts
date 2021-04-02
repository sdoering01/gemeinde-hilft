import { useEffect, useState, useCallback } from 'react';

const passwordStorageKey = 'GH_apiPassword';

export const usePassword = () => {
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    const isLoggedIn = !!password;

    useEffect(() => {
        const savedPassword = localStorage.getItem(passwordStorageKey);
        if (savedPassword) {
            setPassword(savedPassword);
        }
        setIsLoading(false);
    }, []);

    const login = useCallback(
        (newPassword: string, remember: boolean) => {
            if (remember) {
                localStorage.setItem(passwordStorageKey, newPassword);
            }
            setPassword(newPassword);
        },
        [setPassword]
    );

    const logout = useCallback(() => {
        setPassword('');
        localStorage.removeItem(passwordStorageKey);
    }, [setPassword]);

    return { password, login, logout, isLoggedIn, isLoading };
};
