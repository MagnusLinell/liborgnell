import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import 'normalize.css/normalize.css';
import './_app.less';
import Cookies from '../components/Cookies';

class MyApp extends App {
    componentDidMount() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js").catch(err => console.error("Service worker registration failed", err));
        }
    }

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
        const consent = typeof window !== 'undefined' && localStorage.getItem('consent');

        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1" />
                    <meta property="og:site_name" content="Brewbang" />
                    <meta name="og:type" property="og:type" content="website" />
                    <meta name="theme-color" content="#ffd32a" />
                    <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <meta charSet="utf-8" />

                    <link rel="preconnect" href="https://images.ctfassets.net/" crossOrigin />
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
                </Head>
                <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap"
                        lazyload="true"
                        async
                        defer
                    />
                <Cookies />
                <Component {...pageProps} />
                {consent === 'true' && <script async defer src="https://www.googletagmanager.com/gtag/js?id=UA-140775141-1"></script>}
                {consent === 'true' && <script async defer dangerouslySetInnerHTML={this.setGoogleTags()} />}
            </>
        );
    }
}

export default MyApp