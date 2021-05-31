import Layout from '../components/Layout';

interface Props {}

const NotFoundPage: React.FC<Props> = () => {
    return (
        <Layout>
            <div className="text-2xl text-center">
                Diese Seite konnte nicht gefunden werden
            </div>
        </Layout>
    );
};

export default NotFoundPage;
