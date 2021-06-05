import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Card from '../../components/Card';
import CustomInputField from '../../components/CustomInputField';
import {
    useCreateHelpRequest,
    getAllHelpRequestsKey
} from '../../lib/api/apiHooks';
import { queryClient } from '../../components/Providers';
import LoggedInExlusive from '../../components/LoggedInExlusive';
import Layout from '../../components/Layout';

interface Props {}

export const requestTokenKey = 'GH_requestTokens';

const persistRequestToken = (id: number, token: string) => {
    const prevStr = localStorage.getItem(requestTokenKey);
    let prev: { id: number; token: string }[];
    if (!prevStr) {
        prev = [];
    } else {
        prev = JSON.parse(prevStr);
    }
    prev.push({ id, token });
    localStorage.setItem(requestTokenKey, JSON.stringify(prev));
};

const HelpRequestSchema = Yup.object().shape({
    name: Yup.string().max(100, 'Name zu lang'),
    email: Yup.string()
        .required('Dies ist ein Pflichtfeld')
        .email('Ungültige E-Mail-Adresse')
        .max(200, 'E-Mail-Adresse zu lang'),
    title: Yup.string()
        .required('Dies ist ein Pflichtfeld')
        .max(100, 'Tätigkeit zu lang'),
    description: Yup.string().max(500, 'Zusätzliche Informationen zu lang'),
    accepted: Yup.boolean()
        .required('Dies ist ein Pflichtfeld')
        .isTrue('Dies ist ein Pflichtfeld')
});

const CreateRequest: React.FC<Props> = () => {
    const { mutate, error, isSuccess, isLoading } = useCreateHelpRequest();

    return (
        <LoggedInExlusive>
            <Layout>
                <Card className="mx-auto">
                    <h2 className="text-center text-3xl">
                        Hilfeanfrage erstellen
                    </h2>
                    <hr className="my-4" />
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            title: '',
                            description: '',
                            accepted: false
                        }}
                        validationSchema={HelpRequestSchema}
                        onSubmit={(values, { resetForm }) => {
                            const helpRequest = { ...values };
                            delete helpRequest.accepted;

                            mutate(helpRequest, {
                                onSuccess: async (data) => {
                                    resetForm();
                                    queryClient.invalidateQueries(
                                        getAllHelpRequestsKey
                                    );

                                    try {
                                        const { id, token } = await data.json();
                                        persistRequestToken(id, token);
                                    } catch (err) {
                                        console.error(
                                            'Could not persist request token'
                                        );
                                        console.error(err);
                                    }
                                }
                            });
                        }}
                    >
                        {({ touched, errors }) => (
                            <Form className="flex flex-col items-center gap-4">
                                <Field
                                    name="email"
                                    type="email"
                                    label="E-Mail-Adresse"
                                    required
                                    component={CustomInputField}
                                />
                                <Field
                                    name="name"
                                    label="Name"
                                    placeholder="Anonym"
                                    component={CustomInputField}
                                />
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
                                <div>
                                    <label>
                                        <Field
                                            type="checkbox"
                                            name="accepted"
                                            className="mr-1"
                                        />
                                        <span className="text-red-700">*</span>{' '}
                                        Ich stimme zu, dass meine Daten
                                        verarbeitet werden
                                    </label>
                                    {touched.accepted && errors.accepted && (
                                        <div className="mt-1 text-red-700 text-sm text-center">
                                            {errors.accepted}
                                        </div>
                                    )}
                                </div>
                                <div className="text-sm">
                                    <span className="text-red-700">*</span>{' '}
                                    Pflichtfeld
                                </div>
                                {isSuccess && (
                                    <div className="bg-green-300 p-1 px-2 rounded-md">
                                        Die Hilfeanfrage wurde erfolgreich
                                        erstellt
                                    </div>
                                )}
                                {error && (
                                    <div className="bg-red-300 p-1 px-2 rounded-md">
                                        {(error as Error).message}
                                    </div>
                                )}
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="text-xl mt-2"
                                >
                                    Absenden
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Card>
            </Layout>
        </LoggedInExlusive>
    );
};

export default CreateRequest;
