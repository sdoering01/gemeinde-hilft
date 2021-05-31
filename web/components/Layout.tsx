interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
    return <div className="px-4 pb-8 mt-8">{children}</div>;
};

export default Layout;
