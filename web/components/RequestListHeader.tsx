import RequestListHeaderButton from './RequestListHeaderButton';
import { Section } from '../pages/list';

interface Props {
    activeSection: Section;
    setActiveSection: (section: Section) => void;
}

const RequestListHeader: React.FC<Props> = ({
    activeSection,
    setActiveSection
}) => {
    return (
        <nav className="flex flex-row h-12 sm:h-16 bg-blueGray-500 text-2xl sm:text-3xl text-white rounded-t-2xl sticky top-0 z-10">
            <RequestListHeaderButton
                onClick={() => setActiveSection(Section.REQUESTS)}
                isActive={activeSection === Section.REQUESTS}
            >
                Anfragen
            </RequestListHeaderButton>
            <RequestListHeaderButton
                onClick={() => setActiveSection(Section.OFFERS)}
                isActive={activeSection === Section.OFFERS}
            >
                Angebote
            </RequestListHeaderButton>
        </nav>
    );
};

export default RequestListHeader;
