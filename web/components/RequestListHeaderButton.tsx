import { Section } from '../pages/list';

interface Props {
    onClick: () => void;
    isActive: boolean;
}

export const RequestListHeaderButton: React.FC<Props> = ({
    onClick,
    isActive,
    children
}) => {
    const extraClasses = isActive
        ? 'bg-blueGray-700'
        : 'bg-blueGray-500 hover:bg-blueGray-600';

    return (
        <button
            onClick={onClick}
            className={`h-full flex-1 rounded-t-2xl focus:outline-none ${extraClasses}`}
        >
            {children}
        </button>
    );
};

export default RequestListHeaderButton;
