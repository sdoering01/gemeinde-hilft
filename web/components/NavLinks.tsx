import { useContext } from 'react';
import { useRouter } from 'next/router';

import { PasswordContext } from '../lib/context/PasswordContext';
import NavLink from './NavLink';
import Button from './Button';

interface Props {}

const NavLinks: React.FC<Props> = () => {
    const { logout, isLoggedIn } = useContext(PasswordContext);
    const router = useRouter();

    if (isLoggedIn) {
        return (
            <>
                <NavLink href="/list">Anfragen & Angebote</NavLink>
                <NavLink href="/instructions">Anleitung</NavLink>
                <NavLink href="/login" onClick={logout}>
                    Abmelden
                </NavLink>
                <Button onClick={() => router.push('/create')}>
                    Erstellen
                </Button>
            </>
        );
    }
    return (
        <>
            <NavLink href="/instructions">Anleitung</NavLink>
            <NavLink href="/login">Anmelden</NavLink>
        </>
    );
};

export default NavLinks;
