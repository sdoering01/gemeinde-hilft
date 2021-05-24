import { useRouter } from 'next/router';

import Modal from './Modal';
import Button, { VARIANT } from './Button';
import { useDeleteHelpRequest } from '../lib/api/apiHooks';

interface Props {
    id: number;
    token: string;
    onClose: () => void;
}

const HelpRequestDeleteModal: React.FC<Props> = ({ id, token, onClose }) => {
    const router = useRouter();
    const { mutate, isLoading, isSuccess, error } = useDeleteHelpRequest(
        token,
        id
    );

    const handleClose = () => {
        if (!isLoading && !isSuccess) {
            onClose();
        }
    };

    const handleDelete = () => {
        mutate(null, {
            onSuccess: () => {
                setTimeout(() => router.push('/'), 5000);
            }
        });
    };

    return (
        <Modal
            onClose={handleClose}
            headerContent={
                <h3 className="text-xl">
                    Möchtest du die Hilfeanfrage wirklich löschen?
                </h3>
            }
            className="flex flex-col gap-4 items-start"
        >
            <p>Diese Aktion kann nicht rückgängig gemacht werden!</p>
            {isSuccess && (
                <div className="bg-green-300 p-1 px-2 rounded-md">
                    Die Hilfeanfrage wurde erfolgreich gelöscht
                </div>
            )}
            {error && (
                <div className="bg-red-300 p-1 px-2 rounded-md">
                    {(error as Error).message}
                </div>
            )}
            <div className="w-full flex justify-end gap-4">
                <Button onClick={handleClose} variant={VARIANT.SECONDARY}>
                    Abbrechen
                </Button>
                <Button
                    onClick={handleDelete}
                    disabled={isLoading || isSuccess}
                >
                    Löschen
                </Button>
            </div>
        </Modal>
    );
};

export default HelpRequestDeleteModal;
