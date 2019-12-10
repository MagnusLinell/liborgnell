import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faFlask, faToolbox, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.less';

const Header = ({ locale }) => {
    return (
        <header className={styles.header}>
            <h1>Brewbang</h1>
            <h2>Home brew with a BANG!</h2>
            <p>{locale === 'sv-SE' ? 'Jag brygger olika ölsorter. Mestadels öl gjort på malt, humle, jäst och vatten.' : 'I brew mixed styles of beers. Mostly beer made on malt, hop, yeast and water.'}</p>
            <nav className={styles.nav}>
                <Link href="/"><a><FontAwesomeIcon fixedWidth className={styles.icon} icon={faBeer} /> {locale === 'sv-SE' ? 'Öl' : 'Beer'}</a></Link>
                <Link href="/process"><a><FontAwesomeIcon fixedWidth className={styles.icon} icon={faFlask} /> {locale === 'sv-SE' ? 'Process' : 'Process'}</a></Link>
                <Link href="/equipments"><a><FontAwesomeIcon fixedWidth className={styles.icon} icon={faToolbox} /> {locale === 'sv-SE' ? 'Utrustning' : 'Equipments'}</a></Link>
                <Link href="/about"><a><FontAwesomeIcon fixedWidth className={styles.icon} icon={faUserFriends} />  {locale === 'sv-SE' ? 'Bryggare' : 'Brewer'}</a></Link>
            </nav>
        </header>
    );
};

export default Header;