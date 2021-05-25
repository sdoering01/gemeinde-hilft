import Card from '../components/Card';
import LoggedInExlusive from '../components/LoggedInExlusive';

interface Props {}

const ResendTokensPage: React.FC<Props> = () => {
    return (
        <LoggedInExlusive>
            <Card className="mx-auto">
                <h2 className="text-3xl text-center">
                    Liste aller deiner Anfragen & Angebote beantragen
                </h2>
                <hr className="my-4" />
            </Card>
        </LoggedInExlusive>
    );
};

export default ResendTokensPage;
