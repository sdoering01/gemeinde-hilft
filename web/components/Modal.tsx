import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Card from './Card';

interface Props {
    show: boolean;
    headerContent?: React.ReactNode;
    footerContent?: React.ReactNode;
    className?: string;
    onClose?: () => void;
}

const Modal: React.FC<Props> = ({
    show,
    headerContent,
    footerContent,
    className,
    children,
    onClose
}) => {
    const ref = useRef<HTMLElement>();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        ref.current = document.getElementById('modal-portal');
        setIsMounted(true);
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    if (!isMounted) {
        return null;
    }

    return createPortal(
        <>
            <CSSTransition
                in={show}
                timeout={500}
                unmountOnExit={true}
                mountOnEnter={true}
                classNames="backdrop"
            >
                <div className="fixed inset-0 bg-black z-30 transition-all duration-500" />
            </CSSTransition>
            <CSSTransition
                in={show}
                timeout={500}
                unmountOnExit={true}
                mountOnEnter={true}
                classNames="modal"
            >
                <div className="fixed inset-0 z-30">
                    <div className="h-full p-4 overflow-y-auto transform transition-all duration-500">
                        <Card className="w-full mx-auto">
                            {headerContent && (
                                <header className="border-blueGray-800 border-b pb-4 mb-4 pr-6">
                                    {headerContent}
                                    <span
                                        className="absolute top-1 right-1 px-2 text-2xl cursor-pointer select-none"
                                        onClick={onClose}
                                    >
                                        &times;
                                    </span>
                                </header>
                            )}
                            <div className={className}>{children}</div>
                            {footerContent && (
                                <footer className="border-blueGray-800 border-t pt-4 mt-4">
                                    {footerContent}
                                </footer>
                            )}
                        </Card>
                    </div>
                </div>
            </CSSTransition>
        </>,
        ref.current
    );
};

export default Modal;
