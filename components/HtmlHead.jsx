import Head from "next/head";

const HtmlHead = ({ page }) => {
    return (
        <Head>
            <title>{page.title}</title>
            <meta name="description" content={page.description} />
            <meta name="og:title" property="og:title" content={page.title} />
            <meta name="og:description" property="og:description" content={page.description} />
            {page.robots ? <meta name="robots" content={page.robots} /> : <meta name="robots" content="index, follow" />}
            <link href={page.canonicalUrl} rel="canonical" />
        </Head>
    );
};

export default HtmlHead;