import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import List from '../components/List';
import Item from '../components/Item';
import HtmlHead from '../components/HtmlHead';
import { fetchPage } from '../integration/contentful';
import Content from '../components/Content';

const Equipments = ({ page, locale }) => {
    return (
        <>
            <HtmlHead page={page} />
            <Header locale={locale }/>
            <Main center>
                <MaxWidth>
                    <Content>
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
                    </Content>
                </MaxWidth>
            </Main>
            <Footer locale={locale} />
        </>
    );
}

Equipments.getInitialProps = async ({ req }) => {
    const url = '/equipments';
    return await fetchPage(url, req && req.headers);
};

export default Equipments;