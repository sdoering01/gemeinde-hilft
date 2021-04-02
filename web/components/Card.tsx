interface Props {
    size?: CardSize;
    className?: string;
}

export enum CardSize {
    SMALL = 'max-w-sm',
    MEDIUM = 'max-w-lg',
    LARGE = 'max-w-3xl'
}

const Card: React.FC<Props> = ({
    size = CardSize.MEDIUM,
    className = '',
    children
}) => {
    return (
        <div
            className={`p-4 bg-blue-300 rounded-lg overflow-hidden shadow relative ${size} ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
