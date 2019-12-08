import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import './_app.less';

class MyApp extends App {
    setGoogleTags() {
        return {
            __html:
                `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'UA-140775141-1');
                `
        };
    }

    render() {
        const { Component, pageProps } = this.props;


        return (
            <>
                <Head>
                    <title>Brewbang</title>
                    <meta name="description" content="Home brew with a BANG! I brew mixed styles of beers. Mostly beer made on malt, hop, yeast and water." />
                    <meta name="og:title" property="og:title" content="Brewbang" />
                    <meta name="og:description" property="og:description" content="Home brew with a BANG! I brew mixed styles of beers. Mostly beer made on malt, hop, yeast and water." />
                    <meta name="og:type" property="og:type" content="website" />
                    <meta name="robots" content="index, follow" />
                    <link href="/" rel="canonical" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1" />
                    <meta property="og:site_name" content="Brewbang" />
                    <meta name="theme-color" content="#ffd32a" />
                    <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                    <link rel="manifest" href="/static/manifest.webmanifest" />
                    <meta charSet="utf-8" />

                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140775141-1"></script>

                    <script async dangerouslySetInnerHTML={this.setGoogleTags()} />

                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap"
                        lazyload
                        async
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                        lazyload
                        async
                    />
                    <link rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                        crossOrigin="anonymous"
                        lazyload
                        async
                    />
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp