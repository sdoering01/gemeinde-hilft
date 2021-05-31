import { useRouter } from 'next/router';

import Card, { CardSize } from '../../components/Card';
import EditRequest from '../../components/EditRequest';
import Layout from '../../components/Layout';

interface Props {}

const EditRequestPage: React.FC<Props> = () => {
    const router = useRouter();
    const { id, token } = router.query;

    if (router.isReady) {
        if (!isNaN(+id) && typeof token === 'string') {
            return (
                router.isReady && (
                    <Layout>
                        <EditRequest id={+id} token={token} />
                    </Layout>
                )
            );
        } else {
            return (
                <Layout>
                    <Card
                        className="mx-auto text-center text-xl"
                        size={CardSize.SMALL}
                    >
                        Fehlerhafter Link
                    </Card>
                </Layout>
            );
        }
    }

    return null;
};

export default EditRequestPage;
