import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import List from '../components/List';
import Item from '../components/Item';
import HtmlHead from '../components/HtmlHead';
import fetch from 'isomorphic-unfetch';

const Equipments = ({ page }) => {
    return (
        <>
            <HtmlHead page={page} />
            <Header />
            <Main center>
                <MaxWidth>
                    <h3>Equipments</h3>
                    <h4>Kokkärl</h4>
                    <List>
                        <Item>10 literskastrull</Item>
                    </List>
                    <h4>Jäskärl</h4>
                    <List>
                        <Item>10 liters jäskärl i plast</Item>
                        <Item>30 liters jäskärl i plast</Item>
                    </List>
                    <h4>Kylning</h4>
                    <List>
                        <Item>Kylspiral</Item>
                    </List>
                    <h4>Övrigt</h4>
                    <List>
                        <Item>Stålsil</Item>
                        <Item>Plastslev</Item>
                        <Item>Kylbox</Item>
                        <Item>Hydrometer</Item>
                        <Item>Mätglas i glas</Item>
                    </List>
                </MaxWidth>
            </Main>
            <Footer />
        </>
    );
}

Equipments.getInitialProps = async () => {
    const url = '/equipments';
    const response =  await fetch(`https://cdn.contentful.com/spaces/64xqbvwx99mx/environments/master/entries?access_token=gqWbB2DnVZKhCDXV1Ib7wTZvpwH6EN80Lv_vhEvxZBs&content_type=page&include=1&fields.url=${url}`);
    const body = await response.json();
    return { page: body.items[0].fields };
};

export default Equipments;