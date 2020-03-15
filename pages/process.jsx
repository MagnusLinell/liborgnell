import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import HtmlHead from '../components/HtmlHead';
import { fetchPage } from '../integration/contentful';
import Content from '../components/Content';

const Process = ({ page, locale }) => {
    return (
        <>
            <HtmlHead page={page} />
            <Header locale={locale} />
            <Main center>
                <MaxWidth>
                    <Content>
                        <h3>The brew process</h3>
                        <p>BIAB method - Brew In A Bag</p>
                        <h4>Lakning</h4>
                        <p>Värm upp vatten till 71 grader. Tillsätt krossad malt. Låt stå i 67 grader under 60 min.</p>
                        <h4>Kokning</h4>
                        <p>Koka upp till 100 grader. Tillsätt humle. Koka i 60 min.</p>
                        <h4>Kylning</h4>
                        <p>Kyl ölen snabbt till 20 grader.</p>
                        <h4>Filtrering</h4>
                        <p>Filtrera ölet genom en sil över till ett jäskärl.</p>
                        <h4>Jäsning</h4>
                        <p>Jäs ölet under ca 2 veckor.</p>
                        <h4>Buteljering</h4>
                        <p>Häll socker i flaskorna och fyll dem med det jästa ölet. Låt stå i ca 2 veckor.</p>
                    </Content>
                </MaxWidth>
            </Main>
            <Footer locale={locale} />
        </>
    );
}

Process.getInitialProps = async ({ req }) => {
    const url = '/process';
    return await fetchPage(url, req && req.headers);
};

export default Process;