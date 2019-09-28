import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaxWidth from '../components/MaxWidth';
import Main from '../components/Main';
import styles from './rate.less';

const Rate = ({ query }) => {
    const [overall, setOverall] = useState(0);
    const onRate = async (e) => {
        e.preventDefault();
        if (overall === 0 || overall > 10) {
            return;
        }
        try {
            const result = await fetch('/api/beer/rate', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    beerId: query.beerId,
                    rate: { overall }
                })
            });
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <Header />
            <Main center>
                <MaxWidth>
                    <form className={styles.form} onSubmit={onRate}>
                        <h3>Betygsätt ölen {query.code}</h3>
                        <label htmlFor="overall">Övergripande betyg (1-10)</label>
                        <input name="overall" type="number" min="1" max="10" onChange={(e) => setOverall(e.target.value)} />
                        <button type="submit">Betygsätt</button>
                    </form>
                </MaxWidth>
            </Main>
            <Footer />
        </>
    );
}


Rate.getInitialProps = ({ query }) => {
    return { query }
}

export default Rate;