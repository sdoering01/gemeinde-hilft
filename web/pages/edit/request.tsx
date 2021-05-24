import { useRouter } from 'next/router';

import Card, { CardSize } from '../../components/Card';
import EditRequest from '../../components/EditRequest';

interface Props {}

const EditRequestPage: React.FC<Props> = () => {
    const router = useRouter();
    const { id, token } = router.query;

    if (router.isReady) {
        if (!isNaN(+id) && typeof token === 'string') {
            return router.isReady && <EditRequest id={+id} token={token} />;
        } else {
            return (
                <Card
                    className="mx-auto text-center text-xl"
                    size={CardSize.SMALL}
                >
                    Fehlerhafter Link
                </Card>
            );
        }
    }

    return null;
};

export default EditRequestPage;
