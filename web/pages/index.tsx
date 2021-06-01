import { useRouter } from 'next/router';

import Button from '../components/Button';

const Home = () => {
    const { push } = useRouter();

    return (
        <>
            <div className="py-24 flex flex-col items-center justify-center text-center text-5xl bg-gradient-to-b from-blueGray-900 via-blueGray-500 to-blueGray-500 text-white sm:text-6xl">
                <h1 className="mb-24 filter drop-shadow-2xl">
                    Gemeinde
                    <br />
                    hilft
                </h1>
                <div className="text-2xl text-center w-full max-w-xl text-white px-4">
                    Gemeinde hilft ist ein gemeinnütziges Projekt um
                    Hilfeleistungen innerhalb einer Gemeinde zu vermitteln und
                    die Liebe Jesu praktisch zu leben.
                </div>
            </div>
            <div className="py-16 px-4 bg-blueGray-300">
                <h2 className="text-center text-4xl mb-12">
                    Wie funktioniert Gemeinde hilft?
                </h2>
                <div className="flex flex-wrap justify-around gap-2 text-center text-xl max-w-5xl mx-auto sm:gap-4">
                    <div className="w-64 rounded-lg flex flex-col items-center p-6">
                        <div className="bg-red-300 w-32 h-32 p-8 rounded-full mb-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 36 36"
                            >
                                <path
                                    fill="#CCD6DD"
                                    d="M31 32c0 2.209-1.791 4-4 4H5c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h22c2.209 0 4 1.791 4 4v28z"
                                />
                                <path
                                    fill="#99AAB5"
                                    d="M27 24c0 .553-.447 1-1 1H6c-.552 0-1-.447-1-1 0-.553.448-1 1-1h20c.553 0 1 .447 1 1zm-16 4c0 .553-.448 1-1 1H6c-.552 0-1-.447-1-1 0-.553.448-1 1-1h4c.552 0 1 .447 1 1zM27 8c0 .552-.447 1-1 1H6c-.552 0-1-.448-1-1s.448-1 1-1h20c.553 0 1 .448 1 1zm0 4c0 .553-.447 1-1 1H6c-.552 0-1-.447-1-1 0-.553.448-1 1-1h20c.553 0 1 .447 1 1zm0 4c0 .553-.447 1-1 1H6c-.552 0-1-.447-1-1 0-.553.448-1 1-1h20c.553 0 1 .447 1 1zm0 4c0 .553-.447 1-1 1H6c-.552 0-1-.447-1-1 0-.553.448-1 1-1h20c.553 0 1 .447 1 1z"
                                />
                                <path
                                    fill="#66757F"
                                    d="M31 6.272c-.827-.535-1.837-.579-2.521-.023l-.792.646-1.484 1.211-.1.08-2.376 1.938-11.878 9.686c-.437.357-.793 1.219-1.173 2.074-.378.85-.969 2.852-1.443 4.391-.148.25-1.065 1.846-.551 2.453.52.615 2.326.01 2.568-.076 1.626-.174 3.731-.373 4.648-.58.924-.211 1.854-.395 2.291-.752.008-.006.01-.018.017-.023l11.858-9.666.792-.646.144-.118V6.272z"
                                />
                                <path
                                    fill="#D99E82"
                                    d="M18.145 22.526s-1.274-1.881-2.117-2.553c-.672-.843-2.549-2.116-2.549-2.116-.448-.446-1.191-.48-1.629-.043-.437.438-.793 1.366-1.173 2.291-.472 1.146-1.276 4.154-1.768 5.752-.083.272.517-.45.503-.21-.01.187.027.394.074.581l-.146.159.208.067c.025.082.05.154.068.21l.159-.146c.187.047.394.084.58.074.24-.014-.483.587-.21.503 1.598-.493 4.607-1.296 5.752-1.768.924-.381 1.854-.736 2.291-1.174.439-.435.406-1.178-.043-1.627z"
                                />
                                <path
                                    fill="#EA596E"
                                    d="M25.312 4.351c-.876.875-.876 2.293 0 3.168l3.167 3.168c.876.874 2.294.874 3.168 0l3.169-3.168c.874-.875.874-2.293 0-3.168l-3.169-3.168c-.874-.875-2.292-.875-3.168 0l-3.167 3.168z"
                                />
                                <path
                                    fill="#FFCC4D"
                                    d="M11.849 17.815l3.17 3.17 3.165 3.166 11.881-11.879-6.337-6.336-11.879 11.879z"
                                />
                                <path
                                    fill="#292F33"
                                    d="M11.298 26.742s-2.06 1.133-2.616.576c-.557-.558.581-2.611.581-2.611s1.951.036 2.035 2.035z"
                                />
                                <path
                                    fill="#CCD6DD"
                                    d="M23.728 5.935l3.96-3.96 6.336 6.337-3.96 3.96z"
                                />
                                <path
                                    fill="#99AAB5"
                                    d="M26.103 3.558l.792-.792 6.336 6.335-.792.792zM24.52 5.142l.791-.791 6.336 6.335-.792.792z"
                                />
                            </svg>
                        </div>
                        <div>Erstelle eine Anfrage oder ein Angebot</div>
                    </div>
                    <div className="w-64 rounded-lg flex flex-col items-center p-8">
                        <div className="bg-red-300 w-32 h-32 p-8 rounded-full mb-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 36 36"
                            >
                                <path
                                    fill="#CCD6DD"
                                    d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V14c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z"
                                />
                                <path
                                    fill="#99AAB5"
                                    d="M11.95 22.636L.637 33.949c-.027.028-.037.063-.06.091.34.57.814 1.043 1.384 1.384.029-.023.063-.033.09-.06L13.365 24.05c.39-.391.39-1.023 0-1.414-.392-.391-1.024-.391-1.415 0M35.423 34.04c-.021-.028-.033-.063-.06-.09L24.051 22.636c-.392-.391-1.024-.391-1.415 0-.391.392-.391 1.024 0 1.414l11.313 11.314c.026.026.062.037.09.06.571-.34 1.044-.814 1.384-1.384"
                                />
                                <path
                                    fill="#99AAB5"
                                    d="M32 10H4c-2.209 0-4 1.791-4 4v1.03l14.528 14.496c1.894 1.894 4.988 1.894 6.884 0L36 15.009V14c0-2.209-1.791-4-4-4z"
                                />
                                <path
                                    fill="#E1E8ED"
                                    d="M32 10H4c-1.588 0-2.949.934-3.595 2.275l14.766 14.767c1.562 1.562 4.096 1.562 5.657 0l14.767-14.767C34.949 10.934 33.589 10 32 10z"
                                />
                                <path
                                    fill="#55ACEE"
                                    d="M26.716 7H22V2c0-1.104-.895-2-2-2h-4c-1.104 0-2 .896-2 2v5H9.148c-1.223 0-1.515.624-.651 1.489l7.863 7.863c.865.865 2.28.865 3.145 0l7.863-7.863C28.232 7.624 27.94 7 26.716 7z"
                                />
                            </svg>
                        </div>
                        <div>
                            Erhalte Kontaktdaten einer hilfsbereiten bzw.
                            hilfesuchenden Person
                        </div>
                    </div>

                    <div className="w-64 rounded-lg flex flex-col items-center p-8">
                        <div className="bg-red-300 w-32 h-32 p-8 rounded-full mb-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 36 36"
                            >
                                <path
                                    fill="#31373D"
                                    d="M11 36s-4 0-4-4V4s0-4 4-4h14s4 0 4 4v28s0 4-4 4H11z"
                                />
                                <path fill="#55ACEE" d="M9 5h18v26H9z" />
                            </svg>
                        </div>
                        <div>Kontaktiere die Person</div>
                    </div>
                </div>
            </div>
            <div className="bg-blueGray-700 py-12 px-4 flex flex-col items-center text-center text-2xl text-white">
                <div className="mb-6">Jetzt anmelden und loslegen</div>
                <Button onClick={() => push('/login')}>Anmelden</Button>
            </div>
            <div className="bg-blueGray-300 px-4 py-16 text-center">
                <h3 className="text-4xl mb-10">Vorteile von Gemeinde hilft</h3>
                <ul className="max-w-5xl mx-auto flex flex-col gap-6 text-lg">
                    <li>
                        Wenn du eine Anfrage oder ein Angebot erstellst ist
                        deine E-Mail-Adresse nicht für andere Personen sichtbar
                    </li>
                    <li>
                        Passe deine Anfragen und Angebote jederzeit an oder
                        lösche sie, wenn sie ihren Sinn erfüllt haben
                    </li>
                    <li>
                        Bei der Kontaktaufnahme werden deine Kontaktdaten ohne
                        Zwischenspeicherung direkt weitergeleitet
                    </li>
                    <li>
                        Die Seite ist durch ein Passwort geschützt um Missbrauch
                        zu vermeiden
                    </li>
                    <li>
                        Anfragen und Angebote werden mit der angegebenen
                        E-Mail-Adresse verknüpft, damit keine Accounts notwendig
                        sind
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Home;
