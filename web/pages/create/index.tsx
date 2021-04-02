import Link from 'next/link';

import HelpCategoryButton from '../../components/HelpCategoryButton';

interface Props {}

const CreateIndex: React.FC<Props> = () => {
    return (
        <div>
            <h2 className="text-center text-4xl mb-6 lg:mb-10">
                Was möchtest du erstellen?
            </h2>
            <div className="flex flex-wrap gap-8 lg:gap-12 justify-center">
                <Link href="/create/request">
                    <a>
                        <HelpCategoryButton
                            variant="1"
                            backgroundContent="🤲"
                            textContent="Hilfeanfrage"
                        />
                    </a>
                </Link>
                <Link href="/create/offer">
                    <a>
                        <HelpCategoryButton
                            variant="2"
                            backgroundContent="💪"
                            textContent="Hilfeangebot"
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default CreateIndex;
