import React from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBeer, faFlask, faToolbox, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.less';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Brewbang</h1>
            <h2>Home brew with a BANG!</h2>
            <p>I brew mixed styles of beers. Mostly beer made on malt, hop, yeast and water.</p>
            <nav className={styles.nav}>
                <Link href="/"><a><FontAwesomeIcon fixedWidth className={styles.icon} icon={faBeer} /> Beer</a></Link>
                <Link href="/process"><a><FontAwesomeIcon fixedWidth className={styles.icon} icon={faFlask} /> Process</a></Link>
                <Link href="/equipments"><a><FontAwesomeIcon fixedWidth className={styles.icon} icon={faToolbox} /> Equipment</a></Link>
                <Link href="/about"><a><FontAwesomeIcon fixedWidth className={styles.icon} icon={faUserFriends} /> Brewer</a></Link>
            </nav>
        </header>
    );
};

export default Header;