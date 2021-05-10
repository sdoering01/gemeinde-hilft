import { useHelpRequests } from '../lib/api/apiHooks';
import RequestCard from './RequestCard';

interface Props {}

const RequestList: React.FC<Props> = () => {
    const { data, status } = useHelpRequests();

    if (status === 'error') {
        return <div>Ein Fehler ist aufgetreten</div>;
    }

    if (status === 'loading') {
        return <div>Lade Anfragen...</div>;
    }

    return (
        <div className="flex flex-col gap-4 xs:gap-8 items-center">
            {data.map((request) => (
                <RequestCard key={request.id} request={request}></RequestCard>
            ))}
        </div>
    );
};

export default RequestList;
