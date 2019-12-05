import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';

const About = () => {
    return (
        <>
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

export default About;