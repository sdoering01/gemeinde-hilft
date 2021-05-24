import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
    getAllHelpRequestsKey,
    useHelpRequestWithToken,
    useUpdateHelpRequest
} from '../lib/api/apiHooks';
import Card from './Card';
import CustomInputField from './CustomInputField';
import Button, { VARIANT } from './Button';
import { queryClient } from './Providers';
import HelpRequestDeleteModal from './HelpRequestDeleteModal';

interface Props {
    id: number;
    token: string;
}

const HelpRequestEditSchema = Yup.object().shape({
    title: Yup.string()
        .required('Dies ist ein Pflichtfeld')
        .max(100, 'Tätigkeit zu lang'),
    description: Yup.string().max(500, 'Zusätzliche Informationen zu lang')
});

const EditRequest: React.FC<Props> = ({ id, token }) => {
    const {
        data,
        status: queryStatus,
        error: queryError
    } = useHelpRequestWithToken(token, id);

    const {
        mutate,
        error: updateError,
        isLoading: updateIsLoading,
        isSuccess: updateIsSuccess
    } = useUpdateHelpRequest(token, id);

    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

    return (
        <>
            <Card className="mx-auto">
                <h2 className="text-3xl text-center">
                    Hilfeanfrage bearbeiten
                </h2>
                <hr className="my-4" />
                {queryStatus === 'error' ? (
                    <div className="text-center">
                        {(queryError as Error).message}
                    </div>
                ) : queryStatus === 'loading' ? (
                    <div className="text-center">Lade Anfrage</div>
                ) : (
                    <Formik
                        initialValues={{
                            title: data.title,
                            description: data.description
                        }}
                        validationSchema={HelpRequestEditSchema}
                        onSubmit={(values) => {
                            mutate(
                                { ...values },
                                {
                                    onSuccess: () => {
                                        queryClient.invalidateQueries(
                                            getAllHelpRequestsKey
                                        );
                                    }
                                }
                            );
                        }}
                    >
                        {() => (
                            <Form className="flex flex-col items-center gap-4">
                                <Field
                                    name="title"
                                    label="Tätigkeit"
                                    required
                                    component={CustomInputField}
                                />
                                <Field
                                    name="description"
                                    label="Zusätzliche Informationen"
                                    customAs="textarea"
                                    rows="3"
                                    component={CustomInputField}
                                />
                                <div className="text-sm">
                                    <span className="text-red-700">*</span>{' '}
                                    Pflichtfeld
                                </div>
                                {updateIsSuccess && (
                                    <div className="bg-green-300 p-1 px-2 rounded-md">
                                        Die Hilfeanfrage wurde erfolgreich
                                        bearbeitet
                                    </div>
                                )}
                                {updateError && (
                                    <div className="bg-red-300 p-1 px-2 rounded-md">
                                        {(updateError as Error).message}
                                    </div>
                                )}
                                <div className="flex gap-4 flex-wrap justify-center">
                                    <Button
                                        className="text-lg"
                                        variant={VARIANT.SECONDARY}
                                        onClick={() =>
                                            setConfirmationModalOpen(true)
                                        }
                                    >
                                        Löschen
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={updateIsLoading}
                                        className="text-lg"
                                    >
                                        Änderung absenden
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )}
            </Card>
            {confirmationModalOpen && (
                <HelpRequestDeleteModal
                    id={id}
                    token={token}
                    onClose={() => setConfirmationModalOpen(false)}
                />
            )}
        </>
    );
};

export default EditRequest;
