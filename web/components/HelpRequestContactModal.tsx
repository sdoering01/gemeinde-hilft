import React, { MouseEventHandler } from 'react';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

import Button from './Button';
import Modal from './Modal';
import CustomInputField from './CustomInputField';

interface Props {
    onClose?: MouseEventHandler;
}

const RequestHelpSchema = Yup.object().shape(
    {
        name: Yup.string()
            .required('Dies ist ein Pflichtfeld')
            .max(100, 'Name zu lang'),
        email: Yup.string()
            .email('Ungülitge E-Mail-Adresse')
            .when('phone', {
                is: (phone) => !phone,
                then: Yup.string().required(
                    'E-Mail-Adresse oder Telefonnummer benötigt'
                ),
                otherwise: Yup.string()
            }),
        phone: Yup.string().when('email', {
            is: (email) => !email,
            then: Yup.string().required(
                'E-Mail-Adresse oder Telefonnummer benötigt'
            ),
            otherwise: Yup.string()
        }),
        additionalInformation: Yup.string().max(
            300,
            'Zusätzliche Informationen sind zu lang'
        ),
        accepted: Yup.boolean().isTrue('Dies ist ein Pflichtfeld')
    },
    [['email', 'phone']]
);

const RequestHelpModal: React.FC<Props> = ({ onClose }) => {
    const addHelpOffer = () => {
        alert('Dummy implementation');
    };

    return (
        <Modal
            headerContent={
                <h3 className="text-xl">
                    Gib bitte an, wie die Person dich erreichen kann
                </h3>
            }
            onClose={onClose}
        >
            <Formik
                onSubmit={addHelpOffer}
                validationSchema={RequestHelpSchema}
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    additionalInformation: '',
                    accepted: false
                }}
            >
                {({ touched, errors }) => (
                    <Form className="flex flex-col gap-4 items-center">
                        <Field
                            name="name"
                            label="Name"
                            required
                            component={CustomInputField}
                        />
                        <Field
                            name="email"
                            label="E-Mail-Adresse"
                            type="email"
                            required
                            component={CustomInputField}
                        />
                        <Field
                            name="phone"
                            label="Telefonnummer"
                            type="tel"
                            required
                            component={CustomInputField}
                        />
                        <Field
                            component={CustomInputField}
                            name="additionalInformation"
                            label="Zusätzliche Informationen"
                            customAs="textarea"
                            rows="3"
                        />
                        <div>
                            <label>
                                <Field
                                    type="checkbox"
                                    name="accepted"
                                    className="mr-1"
                                />
                                <span className="text-red-700">*</span> Ich
                                stimme zu, dass meine Daten an die anfragende
                                Person gesendet werden
                            </label>
                            {touched.accepted && errors.accepted && (
                                <div className="mt-1 text-red-700 text-sm text-center">
                                    {errors.accepted}
                                </div>
                            )}
                        </div>
                        <div className="text-sm">
                            <span className="text-red-700">*</span> Pflichtfeld
                            (Mindestens eins von E-Mail-Adresse oder
                            Telefonnummer)
                        </div>
                        <Button type="submit">Absenden</Button>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default RequestHelpModal;
