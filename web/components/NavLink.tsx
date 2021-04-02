import { useRouter } from 'next/router';

interface Props {
    href: string;
    onClick?: () => void;
}

export const NavLink: React.FC<Props> = ({ href, onClick, children }) => {
    const router = useRouter();
    const colorClass =
        router.asPath === href
            ? 'text-white'
            : 'text-gray-400 hover:text-gray-200';

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (onClick) onClick();
        router.push(href);
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`px-1 py-2 ${colorClass}`}
        >
            {children}
        </a>
    );
};

export default NavLink;
