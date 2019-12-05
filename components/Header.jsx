import React from 'react';
import Link from 'next/link';
import styles from './Header.less';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Brewbang</h1>
            <h2>Home brew with a BANG!</h2>
            <p>I brew mixed styles of beers. Mostly beer made on malt, hop, yeast and water.</p>
            <nav className={styles.nav}>
                <Link href="/"><a><i className="fas fa-beer"></i> Beer</a></Link>
                <Link href="/process"><a><i className="fas fa-flask"></i> Process</a></Link>
                <Link href="/equipments"><a><i className="fas fa-toolbox"></i> Equipment</a></Link>
                <Link href="/about"><a><i className="fas fa-user-friends"></i> Brewer</a></Link>
            </nav>
        </header>
    );
};

export default Header;