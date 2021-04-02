interface Props {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<Props> = ({
    type = 'button',
    className = '',
    onClick,
    disabled = false,
    children
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`py-2 px-4 text-black rounded-lg focus:outline-none ${
                disabled
                    ? 'cursor-not-allowed bg-red-300'
                    : 'bg-red-400 hover:bg-red-500'
            } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
