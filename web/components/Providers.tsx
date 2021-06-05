import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { usePassword } from '../lib/hooks/usePassword';
import { PasswordContext } from '../lib/context/PasswordContext';
import { ApiError } from '../lib/api/rawApi';

interface Props {}

export const queryClient = new QueryClient();

const Providers: React.FC<Props> = ({ children }) => {
    const passwordValue = usePassword();

    useEffect(() => {
        const defaultErrorHandler = (error: unknown) => {
            if (error instanceof ApiError && error.code === 401) {
                // TODO: Present error text to user
                passwordValue.logout();
            }
        };

        queryClient.setDefaultOptions({
            queries: {
                onError: defaultErrorHandler,
                retry: (failureCount, error) => {
                    if (
                        failureCount === 3 ||
                        (error instanceof ApiError &&
                            (error.code === 401 || error.code === 429))
                    ) {
                        return false;
                    }
                    return true;
                }
            },
            mutations: {
                onError: defaultErrorHandler
            }
        });
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <PasswordContext.Provider value={passwordValue}>
                {!passwordValue.isLoading && children}
            </PasswordContext.Provider>
        </QueryClientProvider>
    );
};

export default Providers;
