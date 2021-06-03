import { useEffect } from 'react';

export const useHideBodyOverflow = (hide: boolean) => {
    useEffect(() => {
        if (hide) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [hide]);
};
