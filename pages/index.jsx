import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import classNames from 'classnames';
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
import Badge from '../components/Badge';
import styles from './index.less';


const Beers = ({ beers }) => {
    const [ratings, setRatings] = useState([]);
    const beersWithMaltExtract = beers.filter(beer => beer.type === 'malt extract');
    const beersWithWholeMalt = beers.filter(beer => beer.type === 'whole malt');

    useEffect(() => {
        const fetchRatings = async () => {
            const beerRatesReponse = await fetch('/api/beer/rates');
            const beerRates = await beerRatesReponse.json();
            setRatings(beerRates);
        }
        fetchRatings();
    }, []);

    const getBadgeText = (beer) => {
        const brewTime = new Date(beer.brewedAt).getTime();
        const tappTime = new Date(beer.tappedAt).getTime();
        const doneTime = new Date(beer.doneAt).getTime();
        const nowTime = new Date().getTime();
        if (nowTime >= tappTime && nowTime < doneTime) {
            return 'Kolsyras';
        }
        if (nowTime >= brewTime && nowTime < tappTime) {
            return 'Jäser';
        }
        return null;
    };

    const createBeer = (beer, index) => {
        const badgeText = getBadgeText(beer);
        const rating = ratings.find(rating => rating.beerId === beer.beerId);
        const ratingIcons = rating ? [...Array(10)].map((num, index) => {
            return index < rating.overall ? <i className={classNames('fas', 'fa-beer', styles.rate)} /> : <i className={classNames('fas', 'fa-beer', styles.rate, styles.gray)} />;
        }) : [];
        return (
            <Section key={index}>
                {badgeText && <Badge text={badgeText} />}
                <h2>{beer.title} {beer.oldTitle && <OldName text={beer.oldTitle} />}</h2>
                {rating && <div className={styles.rating}>{ratingIcons}</div>}
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