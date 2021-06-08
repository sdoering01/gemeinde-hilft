import { useEffect, useRef } from 'react';

export const useHideBodyOverflow = (hide: boolean) => {
    // Use ref for last known hide state because the parameter is always false,
    // when the cleanup function is called
    const hideRef = useRef(hide);

    useEffect(() => {
        hideRef.current = hide;
        if (hide) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [hide]);

    // Remove class when component is unmounted without setting hide to false
    useEffect(
        () => () => {
            if (hideRef.current) {
                document.body.classList.remove('overflow-hidden');
            }
        },
        []
    );
};
