import Head from 'next/head';

import '../styles/globals.css';
import PageHeader from '../components/PageHeader';
import Providers from '../components/Providers';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Gemeinde hilft</title>
            </Head>

            <Providers>
                <PageHeader />
                <main className="px-4 pb-8">
                    <Component {...pageProps} />
                </main>
            </Providers>
        </>
    );
};

export default App;
