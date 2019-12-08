import React, { useState } from 'react';
import styles from './Cookies.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import MaxWidth from './MaxWidth';

const Cookies = () => {
    const [consent, setConsent] = useState((typeof window !== 'undefined' && localStorage.getItem('consent')) || 'unset');
    
    const onChange = () => {
        localStorage.setItem('consent', undefined);
        setConsent('unset');
    };

    if (consent !== 'unset') {
        return (<div className={styles.optOut}><button className={styles.link} type="button" onClick={onChange}>Change cookie answer</button></div>);
    }
    const onYes = () => {
        localStorage.setItem('consent', 'true');
        setConsent('true');
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-140775141-1');
        const script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=UA-140775141-1";
        document.getElementsByTagName('body')[0].appendChild(script);
    }
    const onNo = () => {
        localStorage.setItem('consent', 'false');
        setConsent('false');
    }
    return (
        <div className={styles.cookieContainer}>
            <MaxWidth className={styles.cookies}>
                <div className={styles.text}>
                    <FontAwesomeIcon className={styles.icon} icon={faCookieBite} /> We are using cookies for google analytics.
                </div>
                <div className={styles.buttons} >
                    <button className={styles.button} type="button" onClick={onNo}>No cookies</button>
                    <button className={styles.button} type="button" onClick={onYes}>I want cookies</button>
                </div>
            </MaxWidth>
        </div>
    );
};

export default Cookies;