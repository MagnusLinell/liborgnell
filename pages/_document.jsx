import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        const { locale } = this.props.__NEXT_DATA__.props.pageProps;
        return (
            <Html lang={locale || 'en'}>
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