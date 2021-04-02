import Link from 'next/link';
import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';

import NavLinks from './NavLinks';
import { PasswordContext } from '../lib/context/PasswordContext';

interface Props {}

const PageHeader: React.FC<Props> = () => {
    const { isLoggedIn, logout } = useContext(PasswordContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        Router.events.on('routeChangeStart', closeMenu);
        return () => Router.events.off('routeChangeStart', closeMenu);
    }, []);

    return (
        <header className="h-16 w-full mb-8 px-4 bg-blueGray-900 shadow-md flex flex-row justify-between items-center">
            <Link href="/">
                <a>
                    <div className="h-full flex flex-row items-center">
                        <div className="h-12 w-12 mr-4 flex-shrink-0 hidden xs:block">
                            <img
                                className="h-full w-full rounded-lg"
                                src="/logo-48x48.jpg"
                                alt="Logo"
                            />
                        </div>
                        <h1 className="text-3xl text-white">Gemeinde hilft</h1>
                    </div>
                </a>
            </Link>
            <nav className="hidden lg:flex lg flex-row items-center text-xl gap-2">
                <NavLinks />
            </nav>
            <div className="flex items-center justify-center lg:hidden h-full">
                <img
                    src="/burger.svg"
                    alt="Menü"
                    onClick={openMenu}
                    className="lg:hidden h-14 w-14 p-2 cursor-pointer select-none"
                />
            </div>
            {isMenuOpen && (
                <>
                    <div
                        className="fixed z-20 top-0 left-0 w-full h-full bg-opacity-70 bg-black"
                        onClick={closeMenu}
                    />
                    <nav className="flex flex-col bg-blueGray-800 items-center justify-center text-xl gap-2 z-20 p-4 pt-16 h-screen w-screen xs:w-80 fixed top-0 right-0">
                        <span
                            onClick={closeMenu}
                            className="absolute top-0 right-5 p-2 text-white text-5xl cursor-pointer select-none"
                        >
                            X
                        </span>
                        <NavLinks />
                    </nav>
                </>
            )}
        </header>
    );
};

export default PageHeader;
