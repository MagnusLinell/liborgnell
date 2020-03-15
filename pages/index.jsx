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
import HtmlHead from '../components/HtmlHead';
import { fetchPage, fetchBeers } from '../integration/contentful';

const Beers = ({ page, locale }) => {
    const [beers, setBeers] = useState([]);
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

    useEffect(() => {
        const getBeers = async () => {
            const mappedBeers = await fetchBeers();
            setBeers(mappedBeers);
        }
        getBeers();
    }, []);

    const getBadgeText = (beer) => {
        const brewTime = new Date(beer.brewedAt).getTime();
        const tappTime = new Date(beer.tappedAt).getTime();
        const doneTime = new Date(beer.doneAt).getTime();
        const nowTime = new Date().getTime();
        if (nowTime >= tappTime && nowTime < doneTime) {
            return locale === 'sv-SE' ? 'Kolsyrar' : 'Carbonating';
        }
        if (nowTime >= brewTime && nowTime < tappTime) {
            return locale === 'sv-SE' ? 'Jäser' : 'Fermenting';
        }
        return null;
    };

    const createBeer = (beer, index) => {
        const badgeText = getBadgeText(beer);
        const beerRatings = ratings.filter(rating => rating.beerId === beer.beerId);
        const overallRating = beerRatings.length > 0 ? beerRatings.map(beerRating => beerRating.overall).reduce((acc, item) => (acc + item), 0) / beerRatings.length : 0;
        const ratingIcons = overallRating > 0 ? [...Array(10)].map((num, index) => {
            return index < overallRating ? <i className={classNames('fas', 'fa-beer', styles.rate)} /> : <i className={classNames('fas', 'fa-beer', styles.rate, styles.gray)} />;
        }) : [];
        return (
            <Section key={index}>
                {badgeText && <Badge text={badgeText} />}
                <h2>{beer.title} {beer.oldTitle && <OldName text={beer.oldTitle} />}</h2>
                {overallRating > 0 && <div className={styles.rating}>{ratingIcons} ({beerRatings.length})</div>}
                <p>{beer.brewedAt} - {beer.amount} liter - {beer.alcoholVolume ? beer.alcoholVolume : (locale === 'sv-SE' ? 'okänd' : 'unknown')}%</p>
                {beer.image && <Image className={styles.fermentation} height={beer.image.details.image.height} width={beer.image.details.image.width} src={`${beer.image.url}?fm=webp`} alt={beer.title} />}
                <p>{beer.description}</p>
                <List>
                    {beer.guestBrewer && <Item><strong>Guest:</strong> {beer.guestBrewer}</Item>}
                    {beer.style && <Item><strong>Style:</strong> {beer.style}</Item>}
                    {beer.hop && <Item><strong>Hop:</strong> {beer.hop}</Item>}
                    {beer.malt && <Item><strong>Malt:</strong> {beer.malt}</Item>}
                    {beer.yeast && <Item><strong>Yeast:</strong> {beer.yeast}</Item>}
                    {beer.extra && <Item><strong>Extra:</strong> {beer.extra}</Item>}
                </List>
                {beer.linkUrl && (<a href={beer.linkUrl} rel="noreferrer noopener nofollow">{beer.linkText}</a>)}
            </Section>
        );
    }

    return (
        <>
            <HtmlHead page={page} />
            <Header locale={locale} />
            <Main>
                <Article>
                    <h3>{locale === 'sv-SE' ? 'Bryggd på helmalt med BIAB' : 'Brewed on all grain with BIAB'}</h3>
                    <Sections>
                        {beersWithWholeMalt.map(createBeer)}
                    </Sections>
                </Article>
                <Article>
                    <h3>{locale === 'sv-SE' ? 'Bryggd på maltextrakt' : 'Brewed on extract'}</h3>
                    <Sections>
                        {beersWithMaltExtract.map(createBeer)}
                    </Sections>
                </Article>
            </Main>
            <Footer locale={locale} />
        </>
    );
}

Beers.getInitialProps = async ({ req }) => {
    const url = '/';
    return await fetchPage(url, req && req.headers);
};

export default Beers;