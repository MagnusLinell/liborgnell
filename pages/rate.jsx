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

const Rate = ({ query, page }) => {
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
            <Header />
            <Main center>
                <MaxWidth>
                    <form className={styles.form} onSubmit={onRate}>
                        <h3>Rate the beer</h3>
                        <label className={styles.label} htmlFor="overall">Overall rate (1-10)</label>
                        <div>
                            <input className={styles.input} name="overall" type="number" min="1" max="10" onBlur={updateOverall} onChange={updateOverall} />
                            <button className={styles.button} type="submit">Rate</button>
                        </div>
                    </form>
                </MaxWidth>
            </Main>
            <Footer />
        </>
    );
}

Rate.getInitialProps = async ({ query }) => {
    const url = '/rate';
    return { query, page: await fetchPage(url) };
};

export default Rate;