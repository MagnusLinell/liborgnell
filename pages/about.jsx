import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import HtmlHead from '../components/HtmlHead';
import { fetchPage } from '../integration/contentful';
import Content from '../components/Content';

const About = ({ page, locale }) => {
    return (
        <>
            <HtmlHead page={page} />
            <Header locale={locale} />
            <Main center>
                <MaxWidth>
                    <Content>
                        <h3>Brewers</h3>
                        <p>Magnus Linell has since autumn 2018 brewed beer on both extract and whole malt. I brew with the BIAB method since early 2019 in the kitchen in Sollentuna, Sweden.</p>
                    </Content>
                </MaxWidth>
            </Main>
            <Footer locale={locale} />
        </>
    );
}

About.getInitialProps = async ({ req }) => {
    const url = '/about';
    return await fetchPage(url, req && req.headers);
};

export default About;