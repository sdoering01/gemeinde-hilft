interface Props {
    title: string;
}

const InstructionSection: React.FC<Props> = ({ title, children }) => {
    return (
        <div>
            <h3 className="text-xl mb-2 font-semibold">{title}</h3>
            <div>{children}</div>
        </div>
    );
};

export default InstructionSection;
