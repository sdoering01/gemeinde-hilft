import { useState } from 'react';

import LoggedInExlusive from '../components/LoggedInExlusive';
import OverviewListHeader from '../components/OverviewListHeader';
import OverviewListBody from '../components/OverviewListBody';
import Layout from '../components/Layout';

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
            <Layout>
                <div className="max-w-screen-md mx-auto">
                    <OverviewListHeader
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                    />
                    <OverviewListBody activeSection={activeSection} />
                </div>
            </Layout>
        </LoggedInExlusive>
    );
};

export default ListPage;
