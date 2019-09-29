import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Article from '../components/Article';
import Section from '../components/Section';
import Sections from '../components/Sections';
import Image from '../components/Image';
import OldName from '../components/OldName';
import List from '../components/List';
import Item from '../components/Item';
import styles from './index.less';


const Beers = ({ beers }) => {
    const beersWithMaltExtract = beers.filter(beer => beer.type === 'malt extract');
    const beersWithWholeMalt = beers.filter(beer => beer.type === 'whole malt');

    const createBeer = (beer, index) => {
        return (
            <Section key={index}>
                <h2>{beer.title} {beer.oldTitle && <OldName text={beer.oldTitle} />}</h2>
                <p>{beer.brewedAt} - {beer.amount} liter - {beer.alcoholVolume ? beer.alcoholVolume : 'okänd'}%</p>
                {beer.image && <Image className={styles.fermentation} src={beer.image.url} alt={beer.title} />}
                <p>{beer.description}</p>
                <List>
                    {beer.guest && <Item><strong>Stil:</strong> {beer.guest}</Item>}
                    {beer.style && <Item><strong>Stil:</strong> {beer.style}</Item>}
                    {beer.hop && <Item><strong>Humle:</strong> {beer.hop}</Item>}
                    {beer.malt && <Item><strong>Malt:</strong> {beer.malt}</Item>}
                    {beer.yeast && <Item><strong>Jäst:</strong> {beer.yeast}</Item>}
                    {beer.extra && <Item><strong>Extra:</strong> {beer.extra}</Item>}
                </List>
                {beer.linkUrl && (<a href={beer.linkUrl} rel="noreferrer noopener nofollow">{beer.linkText}</a>)}
            </Section>
        );
    }

    return (
        <>
            <Header />
            <Main>
                <Article>
                    <h3>Bryggt på helmalt</h3>
                    <Sections>
                        {beersWithWholeMalt.map(createBeer)}
                    </Sections>
                </Article>
                <Article>
                    <h3>Bryggt på maltextrakt</h3>
                    <Sections>
                        {beersWithMaltExtract.map(createBeer)}
                    </Sections>
                </Article>


                <Article>
                    <h3>Bryggt på helmalt</h3>
                    <Sections>
                        <Section>
                            <h2>Ölympiad 2019</h2>
                            <p>10 liter - 6,1%</p>
                            <Image className={styles.fermentation} src="/static/img/fermentation_batch_7.jpg" alt="Ölympiad 2019" />
                            <p>Vi ordnade en olympiad med femkamp. Där av namnet ölympiad. En mycket god
                                modern saison, vår hittils godaste öl och första gången med klarningsmedel.</p>
                            <List>
                                <Item><strong>Stil:</strong> Modern Saison</Item>
                                <Item><strong>Humle:</strong> Styrian Celeia och Chinook</Item>
                                <Item><strong>Malt:</strong> Pilsner- och vetemalt</Item>
                                <Item><strong>Jäst:</strong> Fermentis Safale BE-134</Item>
                            </List>
                            <a href="https://shop.humle.se/recept/krossad-malt/modern-saison-receptkit-20-l"
                                rel="noreferrer noopener nofollow">Receptsats</a>
                        </Section>
                        <Section>
                            <h2>Angry neighbour <OldName text="Gräsänklingsölen" /></h2>
                            <p>23 Maj 2019 - ca 2 liter - okänd%</p>
                            <div className="">
                                <Image className={styles.fermentation} src="/static/img/fermentation_batch_6.jpg" alt="Gräsänklingsölen" />
                                <p>Ensam hemma. Då passar det att brygga en öl själv. Kör en kopia på förra och testar
                                    om det går att få upp alkoholhalten.</p>
                                <p>Tappkranen läcker under jäsning och 6 liter öl försvinner ner till grannen. Nytt namn
                                    på ölen. Hoppas den smakar gott.</p>
                                <List>
                                    <Item><strong>Stil:</strong> Amarillo Pale Ale</Item>
                                    <Item><strong>Humle:</strong> Amarillo</Item>
                                    <Item><strong>Malt:</strong> Pilsnermalt och CaraMunich I</Item>
                                    <Item><strong>Jäst:</strong> US-05</Item>
                                </List>
                            </div>
                        </Section>
                        <Section>
                            <h2>Mama´s pils</h2>
                            <p>28 April 2019 - 8 liter - 3.5%</p>
                            <div className="">
                                <Image className={styles.fermentation} src="/static/img/fermentation_batch_5.jpg" alt="Mama´s pils" />
                                <p>Mamma fyller år och får en folkis på vår första helmalt.</p>
                                <List>
                                    <Item><strong>Stil:</strong> Amarillo Pale Ale</Item>
                                    <Item><strong>Humle:</strong> Amarillo</Item>
                                    <Item><strong>Malt:</strong> Pilsnermalt och CaraMunich I</Item>
                                    <Item><strong>Jäst:</strong> US-05</Item>
                                </List>
                            </div>
                        </Section>
                    </Sections>
                </Article>
                <Article>
                    <h3>Bryggt på maltextrakt</h3>
                    <Sections>
                        <Section>
                            <h2>Pilsner'n</h2>
                            <p>10 liter - okänd%</p>
                            <Image className={styles.fermentation} src="/static/img/fermentation_batch_4.jpg" alt="Pilsner'n" />
                            <p>Fjärde ölen blev en fin Pilsner</p>
                            <List>
                                <Item><strong>Gäst:</strong> Malin Borg</Item>
                                <Item><strong>Stil:</strong> Bohemian Pilsner</Item>
                                <Item><strong>Humle:</strong> Saaz</Item>
                                <Item><strong>Malt:</strong> Caramalt</Item>
                            </List>
                            <a href="https://www.koksbryggeriet.se/sv/artiklar/pilsner-5-receptsats-10-liter.html"
                                rel="noreferrer noopener nofollow">Receptsats</a>
                        </Section>
                        <Section>
                            <h2>Amarillo IPA</h2>
                            <p>10 liter - okänd%</p>
                            <div className="fermentation"></div>
                            <p>Tredje blev en riktigt god öl</p>
                            <List>
                                <Item><strong>Stil:</strong> American Pale Ale</Item>
                                <Item><strong>Humle:</strong> Amarillo</Item>
                                <Item><strong>Malt:</strong> Pale Ale malt, färgmalt och ljus karamellmalt</Item>
                            </List>
                            <a href="https://www.koksbryggeriet.se/sv/artiklar/apa-by-oppigards-55-receptsats-10-liter.html"
                                rel="noreferrer noopener nofollow">Receptsats</a>
                        </Section>
                        <Section>
                            <h2>Santa's little rain beer</h2>
                            <p>10 liter - okänd%</p>
                            <Image className={styles.fermentation} src="/static/img/fermentation_batch_2.jpg"
                                alt="Santa's little rain beer" />
                            <p>Andra ölen blev en mörk lager</p>
                            <List>
                                <Item><strong>Stil:</strong> Mörk lager</Item>
                                <Item><strong>Humle:</strong> Svensk humle</Item>
                                <Item><strong>Malt:</strong> Rostat kornmalt</Item>
                                <Item><strong>Extra:</strong> Julkryddor av torkat äpple, kanel, nejlika, kardemumma och
                                    fläderblommor</Item>
                            </List>
                            <a href="https://www.koksbryggeriet.se/sv/blogg/aktuellt/2018/10/23/julol-2018.html"
                                rel="noreferrer noopener nofollow">Läs om receptet</a>
                        </Section>
                        <Section>
                            <h2>SEPTIPA XIX</h2>
                            <p>10 liter - okänd%</p>
                            <Image className={styles.fermentation} src="/static/img/fermentation_batch_1.jpg" alt="SEPTIPA XIX" />
                            <p>Första ölen blev en IPA!</p>
                            <List>
                                <Item><strong>Stil:</strong> India Pale Ale (IPA)</Item>
                                <Item><strong>Humle:</strong> Citra</Item>
                                <Item><strong>Malt:</strong> Pale Ale och havregryn</Item>
                            </List>
                            <a href="https://www.koksbryggeriet.se/sv/artiklar/ipahhh-india-pale-ale-grande-receptsats-10-liter-.html"
                                rel="noreferrer noopener nofollow">Receptsats</a>
                        </Section>
                    </Sections>
                </Article>
            </Main>
            <Footer />
        </>
    );
}

Beers.getInitialProps = async () => {
    const fetched = await fetch('https://cdn.contentful.com/spaces/64xqbvwx99mx/environments/master/entries?access_token=gqWbB2DnVZKhCDXV1Ib7wTZvpwH6EN80Lv_vhEvxZBs&content_type=beer&include=2&order=-fields.brewedAt');
    const fetchedBody = await fetched.json();
    const beers = fetchedBody.items.map(item => item.fields);
    const images = fetchedBody.includes.Asset;
    const mappedBeers = beers.map(beer => {
        const image = images.find(image => (image && image.sys.id) === (beer.image && beer.image.sys.id));
        return { ...beer, image: image && { ...image.fields.file } };
    });
    return { beers: mappedBeers };
}

export default Beers;