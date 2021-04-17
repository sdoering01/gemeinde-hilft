import Link from 'next/link';

import HelpCategoryButton from '../../components/HelpCategoryButton';
import LoggedInExlusive from '../../components/LoggedInExlusive';

interface Props {}

const CreateIndex: React.FC<Props> = () => {
    return (
        <LoggedInExlusive>
            <div>
                <h2 className="text-center text-4xl mb-6 lg:mb-10">
                    Was möchtest du erstellen?
                </h2>
                <div className="flex flex-wrap gap-8 lg:gap-12 justify-center">
                    <Link href="/create/request">
                        <a>
                            <HelpCategoryButton variant="request" />
                        </a>
                    </Link>
                    <Link href="/create/offer">
                        <a>
                            <HelpCategoryButton variant="offer" />
                        </a>
                    </Link>
                </div>
            </div>
        </LoggedInExlusive>
    );
};

export default CreateIndex;
