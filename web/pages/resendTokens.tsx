import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import Card from '../components/Card';
import LoggedInExlusive from '../components/LoggedInExlusive';
import CustomInputField from '../components/CustomInputField';
import Button from '../components/Button';
import { useResendTokens } from '../lib/api/apiHooks';
import Layout from '../components/Layout';

interface Props {}

const EmailSchema = Yup.object().shape({
    email: Yup.string()
        .required('Dies ist ein Pflichtfeld')
        .email('Ungültige E-Mail-Adresse')
        .max(200, 'E-Mail-Adresse zu lang')
});

const ResendTokensPage: React.FC<Props> = () => {
    const { mutate, isLoading, isSuccess, error } = useResendTokens();

    return (
        <LoggedInExlusive>
            <Layout>
                <Card className="mx-auto">
                    <h2 className="text-3xl text-center">
                        Liste aller deiner Anfragen & Angebote beantragen
                    </h2>
                    <hr className="my-4" />
                    <p className="text-center mb-4">
                        Die Liste enthält für jede deiner Anfragen & Angebote
                        einen Link mit dem diese bearbeitet oder gelöscht werden
                        können.
                    </p>
                    <Formik
                        initialValues={{
                            email: ''
                        }}
                        validationSchema={EmailSchema}
                        onSubmit={(values, { resetForm }) => {
                            mutate(values.email, {
                                onSuccess: () => resetForm()
                            });
                        }}
                    >
                        {() => (
                            <Form className="flex flex-col items-center gap-4">
                                <Field
                                    name="email"
                                    type="email"
                                    label="E-Mail-Adresse"
                                    component={CustomInputField}
                                />
                                {isSuccess && (
                                    <div className="bg-green-300 p-1 px-2 rounded-md">
                                        Die Liste wurde an die angegebene
                                        E-Mail-Adresse gesendet
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

export default ResendTokensPage;
