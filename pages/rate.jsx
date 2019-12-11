import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Beer from '../components/Beer';
import Main from '../components/Main';
import styles from './rate.less';
import HtmlHead from '../components/HtmlHead';
import fetch from 'isomorphic-unfetch';
import { fetchPage, fetchBeers } from '../integration/contentful';

const Rate = ({ query, page, locale }) => {
    const [beers, setBeers] = useState([]);
    const [overallRate, setOverallRate] = useState(5);
    const beer = query.code && beers.find(beer => query.beerId === beer.beerId);

    useEffect(() => {
        const getBeers = async () => {
            const mappedBeers = await fetchBeers();
            setBeers(mappedBeers);
        }
        getBeers();
    }, []);

    const onRate = async (e) => {
        e.preventDefault();
        if (overallRate < 1 || overallRate > 10) {
            return;
        }
        try {
            await fetch('/api/beer/rate', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    beerId: query.beerId,
                    code: query.code,
                    overall: overallRate
                })
            });
            Router.push({
                pathname: '/',
            });
        } catch (e) {
            console.error(e);
        }
    };

    const updateOverall = (e) => {
        try {
            setOverallRate(parseInt(e.target.value));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <HtmlHead page={page} />
            <Header locale={locale} />
            <Main center>
                <MaxWidth>
                    {!beer && (
                        <div>Nothing here!</div>
                    )}
                    {beer && (
                        <Beer locale={locale} {...beer} />
                    )}
                    {beer && (
                        <form className={styles.form} onSubmit={onRate}>
                            <h3>{locale === 'sv-SE' ? 'Betygsätt ölen' : 'Rate the beer'}</h3>
                            <label className={styles.label} htmlFor="overall">{locale === 'sv-SE' ? 'Övergripande betyg' : 'Overall rate'} (1-10)</label>
                            <div className={styles.sliderContainer}>
                                <input id="overall" type="range" min="1" max="10" value={overallRate} onChange={updateOverall} name="overall" className={styles.slider} /><span className={styles.value}>{overallRate}</span>
                            </div>
                            <div className={styles.submit}>
                                <button className={styles.button} type="submit">{locale === 'sv-SE' ? 'Betygsätt' : 'Rate'}</button>
                            </div>
                        </form>
                    )}
                </MaxWidth>
            </Main>
            <Footer locale={locale} />
        </>
    );
}

Rate.getInitialProps = async ({ query, req }) => {
    const url = '/rate';
    const page = await fetchPage(url, req && req.headers);
    return { query, ...page };
};

export default Rate;