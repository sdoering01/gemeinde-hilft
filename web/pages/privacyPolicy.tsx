import Layout from '../components/Layout';

interface Props {}

const PrivacyPolicy: React.FC<Props> = () => {
    const privacyPolicyIframeUrl =
        process.env.NEXT_PUBLIC_PRIVACY_POLICY_IFRAME_URL;

    if (!privacyPolicyIframeUrl) {
        return (
            <Layout>
                <h2 className="text-center text-2xl">
                    Es wurde keine Datenschutzerklärung hinterlegt
                </h2>
            </Layout>
        );
    }

    return (
        <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={privacyPolicyIframeUrl}
        />
    );
};

export default PrivacyPolicy;
