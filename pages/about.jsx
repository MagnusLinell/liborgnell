import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import HtmlHead from '../components/HtmlHead';
import { fetchPage } from '../integration/contentful';
import Content from '../components/Content';
import RichText from '../components/RichText';

const About = ({ page, locale }) => {
    return (
        <>
            <HtmlHead page={page} />
            <Header locale={locale} />
            <Main center>
                <MaxWidth>
                    <Content>
                        <RichText text={page.text} />
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