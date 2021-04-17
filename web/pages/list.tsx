import { useState } from 'react';

import LoggedInExlusive from '../components/LoggedInExlusive';
import OverviewListHeader from '../components/OverviewListHeader';
import OverviewListBody from '../components/OverviewListBody';

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
                <OverviewListHeader
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <OverviewListBody activeSection={activeSection} />
            </div>
        </LoggedInExlusive>
    );
};

export default ListPage;
