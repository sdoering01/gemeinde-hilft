import Link from 'next/link';

interface Props {}

const InstructionsPage: React.FC<Props> = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <div>
                <h3 className="text-xl mb-4 font-semibold">
                    Anfragen & Angebote bearbeiten oder löschen
                </h3>
                <div>
                    <p>
                        Um eine Anfrage oder ein Angebot zu bearbeiten bzw. zu
                        löschen ist ein spezieller Link notwendig. Nachdem du
                        eine Anfrage oder ein Angebot erstellt hast wird dir
                        dieser Link automatisch an die angegebene E-Mail-Adresse
                        geschickt.
                    </p>
                    <p>
                        Eine Liste aller deiner Anfragen und Angebote kannst du{' '}
                        <Link href="/resendTokens">
                            <a className="underline font-semibold">hier</a>
                        </Link>{' '}
                        anfragen. Die gesendete E-Mail enthält zu jeder Anfrage
                        / jedem Angebot den oben erwähnten Link um Änderungen
                        vorzunehmen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InstructionsPage;
