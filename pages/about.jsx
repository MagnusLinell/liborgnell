import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import HtmlHead from '../components/HtmlHead';

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
    const response =  await fetch(`https://cdn.contentful.com/spaces/64xqbvwx99mx/environments/master/entries?access_token=gqWbB2DnVZKhCDXV1Ib7wTZvpwH6EN80Lv_vhEvxZBs&content_type=page&include=1&fields.url=${url}`);
    const body = await response.json();
    return { page: body.items[0].fields };
};

export default About;