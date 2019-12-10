import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCurrentLocale } from '../integration/locale';

class MyDocument extends Document {
    render() {
        return (
            <Html lang={getCurrentLocale()}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;