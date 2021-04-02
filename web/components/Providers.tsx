import { QueryClient, QueryClientProvider } from 'react-query';

import { usePassword } from '../lib/hooks/usePassword';
import { PasswordContext } from '../lib/context/PasswordContext';

interface Props {}

export const queryClient = new QueryClient();

const Providers: React.FC<Props> = ({ children }) => {
    const passwordValue = usePassword();

    return (
        <QueryClientProvider client={queryClient}>
            <PasswordContext.Provider value={passwordValue}>
                {!passwordValue.isLoading && children}
            </PasswordContext.Provider>
        </QueryClientProvider>
    );
};

export default Providers;
