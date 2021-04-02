/**
 * Variants are needed because the class names of tailwindcss
 * are not allowed to be rendered dynamically, so they
 * don't get purged in the build process.
 */

interface Props {
    variant: '1' | '2';
    backgroundContent: string;
    textContent: string;
}

const HelpCategoryButton: React.FC<Props> = ({
    variant,
    backgroundContent,
    textContent
}) => {
    return (
        <div
            className={`group w-60 h-60 ${
                variant === '1' ? 'border-indigo-500' : 'border-green-500'
            } border-solid border-4 rounded-2xl relative overflow-hidden text-center flex items-center`}
        >
            <div
                className={`absolute w-full h-full ${
                    variant === '1' ? 'bg-indigo-500' : 'bg-green-500'
                } translate-y-full opacity-0 transform transition-all duration-500 delay-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-200`}
            ></div>
            <div className="absolute w-full bottom-16 text-9xl transform transition-all duration-700 opacity-0 -translate-y-64 group-hover:translate-y-0 group-hover:opacity-100">
                {backgroundContent}
            </div>
            <div className="bottom-2 w-full text-4xl transform transition-all duration-700 translate-y-0 group-hover:translate-y-20 group-hover:opacity-100 group-hover:text-2xl">
                {textContent}
            </div>
        </div>
    );
};

export default HelpCategoryButton;
