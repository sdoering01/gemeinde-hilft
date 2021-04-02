import { useQuery } from 'react-query';
import { useContext } from 'react';

import { PasswordContext } from '../lib/context/PasswordContext';
import { useHelpRequests } from '../lib/api/apiHooks';
import Card, { CardSize } from './Card';
import Button from './Button';

interface Props {}

const RequestList: React.FC<Props> = () => {
    const { password } = useContext(PasswordContext);

    const { data, error, status } = useHelpRequests(password);

    if (status === 'error') {
        return <div>Ein Fehler ist aufgetreten</div>;
    }

    if (status === 'loading') {
        return <div>Lade Anfragen...</div>;
    }

    return (
        <div className="flex flex-col gap-4 xs:gap-8 items-center">
            {data.map((request) => (
                <Card
                    key={request.id}
                    className="flex flex-col items-center w-full text-center"
                    size={CardSize.LARGE}
                >
                    <h3 className="text-xl">{request.title}</h3>
                    <p className="mt-2 text-sm text-gray-700">
                        erstellt am{' '}
                        {new Date(request.createdAt).toLocaleDateString()} von{' '}
                        {request.name}
                    </p>
                    {request.description && (
                        <p className="mt-4">{request.description}</p>
                    )}
                    <hr className="bg-white my-4 w-full" />
                    <Button>Helfen</Button>
                </Card>
            ))}
        </div>
    );
};

export default RequestList;
