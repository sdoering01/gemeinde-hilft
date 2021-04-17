import { Section } from '../pages/list';
import RequestList from './RequestList';
import OfferList from './OfferList';

interface Props {
    activeSection: Section;
}

const OverviewListBody: React.FC<Props> = ({ activeSection }) => {
    return (
        <div className="bg-blue-100 p-4 xs:p-8 rounded-b-2xl shadow-md">
            {activeSection === Section.REQUESTS ? (
                <RequestList />
            ) : (
                <OfferList />
            )}
        </div>
    );
};

export default OverviewListBody;
