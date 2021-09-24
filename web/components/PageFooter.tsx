import Link from 'next/link';

interface Props {}

const PageFooter: React.FC<Props> = () => {
    return (
        <footer className="w-full bg-blueGray-700 text-white py-2 px-4">
            <div className="max-w-5xl mx-auto flex justify-between flex-col-reverse gap-4 text-center sm:flex-row sm:text-left">
                © 2021 Simon Döring
                <hr className="sm:none" />
                <div className="flex gap-2 flex-col sm:flex-row sm:gap-4">
                    <Link href="/imprint">
                        <a>Impressum</a>
                    </Link>
                    <Link href="/privacyPolicy">
                        <a>Datenschutzerklärung</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default PageFooter;
