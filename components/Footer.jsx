import React from 'react';
import styles from './Footer.less';

const Footer = ({locale}) => {
    return (
        <footer className={styles.footer}>
            <h3>{locale === 'sv-SE' ? 'Alltid en ny batch på gång!' : 'Always a new batch in line!'}</h3>
        </footer>
    );
};

export default Footer;