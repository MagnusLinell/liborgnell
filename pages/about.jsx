import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import HtmlHead from '../components/HtmlHead';
import { fetchPage } from '../integration/contentful';

const About = ({page}) => {
    return (
        <>
            <HtmlHead page={page} />
            <Header />
            <Main center>
                <MaxWidth>
                    <h3>Brewers</h3>
                    <p>Magnus Linell has since autumn 2018 brewed beer on both extract and whole malt. I brew with the BIAB method since early 2019 in the kitchen in Sollentuna, Sweden.</p>
                </MaxWidth>
            </Main>
            <Footer />
        </>
    );
}

About.getInitialProps = async () => {
    const url = '/about';
    return { page: await fetchPage(url) };
};

export default About;