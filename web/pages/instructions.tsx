import Link from 'next/link';

import LoggedInExlusive from '../components/LoggedInExlusive';
import InstructionSection from '../components/InstructionSection';

interface Props {}

const contactMail = process.env.NEXT_PUBLIC_CONTACT_MAIL;

const InstructionsPage: React.FC<Props> = () => {
    return (
        <LoggedInExlusive>
            <h2 className="text-3xl mb-6 text-center">Anleitung</h2>
            <div className="max-w-4xl mx-auto flex flex-col gap-4">
                <InstructionSection title="Anfragen & Angebote erstellen">
                    <p>
                        Um eine Anfrage oder ein Angebot zu erstellen klicke auf{' '}
                        <i>Erstellen</i> im Menü. Nun kannst du entscheiden, ob
                        du eine Anfrage oder ein Angebot erstellen möchtest.
                        Fülle nun das Formular aus und klicke auf{' '}
                        <i>Absenden</i>. Deine Anfrage bzw. dein Angebot ist nun
                        unter dem Menüpunkt <i>Anfragen & Angebote</i> zu sehen.
                        Wenn jemand dir helfen bzw. deine Hilfe in Anspruch
                        nehmen möchte wird dir eine E-Mail mit den Kontaktdaten
                        der Person geschickt und du kannst dich mit ihr in
                        Verbindung setzen.
                    </p>
                </InstructionSection>
                <InstructionSection title="Bei einer Anfrage helfen & ein Angebot in Anspruch nehmen">
                    <p>
                        Klicke im Menü auf <i>Anfragen & Angebote</i>. Auf
                        dieser Seite findest du zwei Listen - eine für Anfragen
                        und eine für Angbote. Zu jeder Anfrage bzw. jedem
                        Angebot gibt es einen Knopf um zu helfen bzw. die Hilfe
                        in Anspruch zu nehmen. Der Knopf öffnet ein
                        Kontaktformular, welches du ausfüllen und absenden
                        musst. Deine Kontaktdaten werden nun der Person per
                        E-Mail geschickt, damit sie sich bei dir melden kann.
                    </p>
                </InstructionSection>
                <InstructionSection title="Anfragen & Angebote bearbeiten oder löschen">
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
                </InstructionSection>
                <InstructionSection title="Die Seite wird nicht richtig angezeigt oder funktioniert nicht richtig">
                    <p>
                        Wenn es zu Fehlern bei der Anzeige oder Funktion dieser
                        Seite kommen sollte kann es helfen einen aktuellen
                        Browser zu verwenden. Die Seite wurde auf aktuellen
                        Versionen von Google Chrome (bzw. Chromium-basierten
                        Browsern) und Mozilla Firefox getestet.
                    </p>
                    <p>
                        Wenn du einen aktuellen Browser benutzt und trotzdem
                        einen Fehler entdeckst, schicke uns bitte eine E-Mail an{' '}
                        <a
                            href={`mailto:${contactMail}`}
                            className="underline font-semibold"
                        >
                            {contactMail}
                        </a>
                        . Bitte beschreibe den Fehler möglichst genau und hänge
                        ggf. Bilder vom Fehler an.
                    </p>
                </InstructionSection>
            </div>
        </LoggedInExlusive>
    );
};

export default InstructionsPage;
