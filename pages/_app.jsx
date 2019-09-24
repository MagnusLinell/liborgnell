import React from 'react'
import App from 'next/app'
import Head from 'next/head'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <title>Liborgnell</title>
                    <meta name="description" content="Ett litet hembryggeri som brygger med kärlek och känsla" />
                    <meta name="og:title" property="og:title" content="Liborgnell" />
                    <meta name="og:description" property="og:description"
                        content="Ett litet hembryggeri som brygger med kärlek och känsla" />
                    <meta name="og:type" property="og:type" content="website" />
                    <meta name="robots" content="index, follow" />
                    <link href="/" rel="canonical" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1" />
                    <meta property="og:site_name" content="Liborgnell" />
                    <meta name="theme-color" content="#ffd32a" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
                    <link rel="manifest" href="/manifest.webmanifest" />
                    <meta charset="utf-8" />

                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140775141-1"></script>
                    <script async>
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag() {dataLayer.push(arguments); }
                            gtag('js', new Date());
                            gtag('config', 'UA-140775141-1');
                        `}

                    </script>

                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap"
                        lazyload="true"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                        lazyload="true"
                    />
                    <link rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                        crossOrigin="anonymous"
                        lazyload="true"
                    />
                    <style jsx global>
                        {`
                        body { 
                            font-family: 'Amatic SC', cursive;
                            text-transform: uppercase;
                            font-weight: 100;
                            background-color: #1e272e;
                            color: #d2dae2;
                        }

                        h1 {
                            margin: 0;
                            font-size: 56px;
                        }

                        h2 {
                            margin: 0;
                            font-size: 32px;
                        }

                        h3 {
                            margin: 0;
                            font-size: 24px;
                            line-height: 2;
                        }

                        h4 {
                            margin: 0;
                            font-size: 20px;    
                            line-height: 1.5;
                        }

                        p {
                            margin: 0 0 10px 0;
                            font-size: 20px;
                            font-weight: 500;
                        }
                        `}
                    </style>
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp