import { FieldAttributes, FormikProps } from 'formik';

interface Props {
    field: FieldAttributes<any>;
    form: FormikProps<any>;
    type?: 'text' | 'email' | 'password';
    label?: string;
    required?: boolean;
    customAs?: 'input' | 'textarea';
    [key: string]: any;
}

/**
 *  Custom input field to be used with the formik Field component
 */
const CustomInputField: React.FC<Props> = ({
    field,
    form: { touched, errors },
    type = 'text',
    label,
    required = false,
    customAs = 'input',
    ...props
}) => {
    const name = field.name;

    return (
        <div className="w-full flex flex-col items-center">
            {label && (
                <label htmlFor={name} className="block mb-1 text-center">
                    {required && <span className="text-red-700">*</span>}{' '}
                    {label}
                </label>
            )}
            {customAs === 'input' ? (
                <input
                    id={name}
                    type={type}
                    {...field}
                    {...props}
                    className="max-w-xs w-full p-1 rounded-md"
                />
            ) : (
                <textarea
                    id={name}
                    type={type}
                    {...field}
                    {...props}
                    className="max-w-xs w-full p-1 rounded-md resize-none"
                />
            )}
            {touched[name] && errors[name] && (
                <div className="mt-1 text-red-700 text-sm">{errors[name]}</div>
            )}
        </div>
    );
};

export default CustomInputField;
