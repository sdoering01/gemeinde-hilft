import { MouseEventHandler } from 'react';

interface Props {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: MouseEventHandler;
    disabled?: boolean;
    variant?: VARIANT;
}

export enum VARIANT {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

const defaultClasses = {
    [VARIANT.PRIMARY]: 'bg-red-400 hover:bg-red-500',
    [VARIANT.SECONDARY]: 'bg-blueGray-300 hover:bg-blueGray-400'
};

const disabledClasses = {
    [VARIANT.PRIMARY]: 'bg-red-300',
    [VARIANT.SECONDARY]: 'bg-blueGray-200'
};

const Button: React.FC<Props> = ({
    type = 'button',
    className = '',
    onClick,
    disabled = false,
    variant = VARIANT.PRIMARY,
    children
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`py-2 px-4 text-black rounded-lg focus:outline-none ${
                disabled
                    ? `cursor-not-allowed ${disabledClasses[variant]}`
                    : defaultClasses[variant]
            } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
