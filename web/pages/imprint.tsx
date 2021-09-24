import Layout from '../components/Layout';

interface Props {}

const Imprint: React.FC<Props> = () => {
    const imprintIframeUrl = process.env.NEXT_PUBLIC_IMPRINT_IFRAME_URL;

    if (!imprintIframeUrl) {
        return (
            <Layout>
                <h2 className="text-center text-2xl">
                    Es wurde kein Impressum hinterlegt
                </h2>
            </Layout>
        );
    }

    return (
        <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={imprintIframeUrl}
        />
    );
};

export default Imprint;
