import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import NavLinks from './NavLinks';
import { useHideBodyOverflow } from '../lib/hooks/useHideBodyOverflow';

interface Props {}

const PageHeader: React.FC<Props> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        Router.events.on('routeChangeStart', closeMenu);
        return () => Router.events.off('routeChangeStart', closeMenu);
    }, []);

    useHideBodyOverflow(isMenuOpen);

    return (
        <header className="h-16 w-full px-4 bg-blueGray-900 shadow-md flex flex-row justify-between items-center">
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
                    role="button"
                    onClick={openMenu}
                    className="lg:hidden h-14 w-14 p-2 cursor-pointer select-none"
                />
            </div>
            <CSSTransition
                in={isMenuOpen}
                timeout={500}
                mountOnEnter={true}
                unmountOnExit={true}
                classNames="backdrop"
            >
                <div
                    className="fixed z-20 top-0 left-0 w-full h-full bg-black transition-all duration-500"
                    onClick={closeMenu}
                />
            </CSSTransition>
            <CSSTransition
                in={isMenuOpen}
                timeout={500}
                mountOnEnter={true}
                unmountOnExit={true}
                classNames="mobile-nav"
            >
                <nav className="flex flex-col bg-blueGray-800 items-center justify-center text-xl gap-2 z-20 p-4 pt-16 h-screen w-screen xs:w-80 fixed top-0 transition-all duration-500">
                    <span
                        onClick={closeMenu}
                        role="button"
                        className="absolute top-0 right-4 py-1 px-3 text-white text-5xl cursor-pointer select-none"
                    >
                        &times;
                    </span>
                    <NavLinks />
                </nav>
            </CSSTransition>
        </header>
    );
};

export default PageHeader;
