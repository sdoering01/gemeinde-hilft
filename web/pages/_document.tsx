import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <div id="modal-portal" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
