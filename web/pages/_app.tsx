import Head from 'next/head';

import '../styles/globals.css';
import '../styles/transitions.css';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import Providers from '../components/Providers';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Gemeinde hilft</title>
            </Head>

            <Providers>
                <PageHeader />
                <main className="flex-grow relative">
                    <Component {...pageProps} />
                </main>
                <PageFooter />
            </Providers>
        </>
    );
};

export default App;
