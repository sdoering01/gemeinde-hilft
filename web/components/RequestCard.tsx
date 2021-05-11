import { useState } from 'react';

import { HelpRequestResponse } from '../lib/api/apiHooks';
import Card, { CardSize } from './Card';
import Button from './Button';
import HelpRequestContactModal from './HelpRequestContactModal';

interface Props {
    request: HelpRequestResponse;
}

const RequestCard: React.FC<Props> = ({
    request: { id, name, title, createdAt, description }
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {isModalOpen && (
                <HelpRequestContactModal requestId={id} onClose={closeModal} />
            )}
            <Card
                className="flex flex-col items-center w-full text-center"
                size={CardSize.LARGE}
            >
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 text-sm text-gray-700">
                    erstellt am {new Date(createdAt).toLocaleDateString()} von{' '}
                    {name}
                </p>
                {description && <p className="mt-4">{description}</p>}
                <hr className="bg-white my-4 w-full" />
                <Button onClick={openModal}>Helfen</Button>
            </Card>
        </>
    );
};

export default RequestCard;
