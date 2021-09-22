import Button from '../../components/Button';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import LoggedInExlusive from '../../components/LoggedInExlusive';

interface Props {}

const CreateOffer: React.FC<Props> = () => {
    return (
        <LoggedInExlusive>
            <Layout>
                <Card className="mx-auto">
                    <h2 className="text-center text-3xl">
                        Hilfeangebot erstellen
                    </h2>
                    <hr className="my-4" />
                    <div className="text-center">
                        Es können noch keine Hilfeangebote erstellt werden
                    </div>
                    <Button
                        className="block mx-auto mt-4"
                        onClick={() => history.back()}
                    >
                        Zurück
                    </Button>
                </Card>
            </Layout>
        </LoggedInExlusive>
    );
};

export default CreateOffer;
