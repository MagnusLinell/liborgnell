import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';

const Process = () => {
    return (
        <>
            <Header />
            <Main center>
                <MaxWidth>
                    <h3>Tillverkningsprocessen</h3>
                    <p>BIAB-metoden - Brew In A Bag</p>
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
                </MaxWidth>
            </Main>
            <Footer />
        </>
    );
}

export default Process;