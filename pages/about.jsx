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
                    <h3>Ölbryggarna</h3>
                    <p>Paret Veronica Borg och Magnus Linell har sedan hösten 2018 bryggt öl på både maltextrakt och helmalt. Senast brygger vi på BIAB-metoden hemma i köket i Sollentuna.</p>
                </MaxWidth>
            </Main>
            <Footer />
        </>
    );
}

export default About;