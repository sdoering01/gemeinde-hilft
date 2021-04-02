import { useState } from 'react';

import LoggedInExlusive from '../components/LoggedInExlusive';
import RequestListHeader from '../components/RequestListHeader';
import RequestListBody from '../components/RequestListBody';

interface Props {}

export enum Section {
    REQUESTS = 'requests',
    OFFERS = 'offers'
}

const ListPage: React.FC<Props> = () => {
    const [activeSection, setActiveSection] = useState<Section>(
        Section.REQUESTS
    );

    return (
        <LoggedInExlusive>
            <div className="max-w-screen-md mx-auto">
                <RequestListHeader
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <RequestListBody activeSection={activeSection} />
            </div>
        </LoggedInExlusive>
    );
};

export default ListPage;
