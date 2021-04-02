import { useContext } from 'react';
import { useRouter } from 'next/router';

import { PasswordContext } from '../lib/context/PasswordContext';

interface Props {}

const LoggedInExlusive: React.FC<Props> = ({ children }) => {
    const { isLoggedIn } = useContext(PasswordContext);
    const router = useRouter();

    if (!isLoggedIn) {
        router.push('/login');
        return null;
    }

    return <>{children}</>;
};

export default LoggedInExlusive;
