import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import List from '../components/List';
import Item from '../components/Item';

const Equipments = () => {
    return (
        <>
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

export default Equipments;