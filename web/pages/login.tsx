import { FormEvent, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import LoggedOutExclusive from '../components/LoggedOutExclusive';
import Card, { CardSize } from '../components/Card';
import Button from '../components/Button';
import { PasswordContext } from '../lib/context/PasswordContext';
import { checkPasswordCall } from '../lib/api/rawApi';

interface Props {}

const login: React.FC<Props> = () => {
    const router = useRouter();

    const [passwordInput, setPasswordInput] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const { login } = useContext(PasswordContext);

    const { isLoading, error, mutate: checkPassword } = useMutation(
        async (password: string) => checkPasswordCall(password),
        {
            onSuccess: () => {
                login(passwordInput, rememberPassword);
                router.push('/list');
            }
        }
    );

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        checkPassword(passwordInput);
    };

    return (
        <LoggedOutExclusive>
            <Card size={CardSize.SMALL} className="mx-auto text-center">
                <h2 className="text-3xl">Passworteingabe</h2>
                <hr className="bg-white my-2" />
                <p>
                    Um diese Seite zu nutzen ist ein Passwort notwendig. Dieses
                    wird in der Infomail rumgeschickt.
                </p>
                <form
                    onSubmit={handleFormSubmit}
                    className="mt-4 flex flex-col items-center"
                >
                    {error && (
                        <>
                            <span className="text-red-600 mb-2">
                                {(error as Error).message}
                            </span>
                        </>
                    )}
                    <input
                        type="password"
                        value={passwordInput}
                        disabled={isLoading}
                        required
                        onChange={(e) => setPasswordInput(e.target.value)}
                        className="mb-1 p-2 rounded-lg focus:outline-none"
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={rememberPassword}
                            disabled={isLoading}
                            onChange={(e) =>
                                setRememberPassword(e.target.checked)
                            }
                            className="mr-1 mb-4"
                        />
                        Passwort merken
                    </label>
                    <Button
                        disabled={isLoading}
                        className="text-xl"
                        type="submit"
                    >
                        Anmelden
                    </Button>
                </form>
            </Card>
        </LoggedOutExclusive>
    );
};

export default login;
