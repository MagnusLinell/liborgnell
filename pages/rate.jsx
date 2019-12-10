import React, { useState } from 'react';
import Router from 'next/router'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import styles from './rate.less';
import HtmlHead from '../components/HtmlHead';
import fetch from 'isomorphic-unfetch';
import { fetchPage } from '../integration/contentful';

const Rate = ({ query, page, locale }) => {
    const [overall, setOverall] = useState(0);
    const onRate = async (e) => {
        e.preventDefault();
        if (overall < 1 || overall > 10) {
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
                    overall
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
            setOverall(parseInt(e.target.value));
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
                    <form className={styles.form} onSubmit={onRate}>
                        <h3>{locale ==='sv-SE' ? 'Betygsätt ölen' : 'Rate the beer'}</h3>
                        <label className={styles.label} htmlFor="overall">{locale ==='sv-SE' ? 'Övergripande betyg' : 'Overall rate'} (1-10)</label>
                        <div>
                            <input className={styles.input} name="overall" type="number" min="1" max="10" onBlur={updateOverall} onChange={updateOverall} />
                            <button className={styles.button} type="submit">{locale ==='sv-SE' ? 'Betygsätt' : 'Rate'}</button>
                        </div>
                    </form>
                </MaxWidth>
            </Main>
            <Footer locale={locale} />
        </>
    );
}

Rate.getInitialProps = async ({ query, req }) => {
    const url = '/rate';
    const page =  await fetchPage(url, req && req.headers);
    return { query, ...page };
};

export default Rate;