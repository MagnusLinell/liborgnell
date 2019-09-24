import React from 'react';
import Link from 'next/link';
import styles from './Header.less';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Liborgnell</h1>
            <h2>Ett litet hembryggeri som brygger med kärlek och känsla</h2>
            <p>Vi brygger olika varianter av öl. Mestadels öl gjort på enbart malt, humle, jäst och vatten.</p>
            <nav className={styles.nav}>
                <Link href="/beers"><a><i className="fas fa-beer"></i> Ölen</a></Link>
                <Link href="/process"><a><i className="fas fa-flask"></i> Processen</a></Link>
                <Link href="/equipments"><a><i className="fas fa-toolbox"></i> Utrustningen</a></Link>
                <Link href="/about"><a><i className="fas fa-user-friends"></i> Bryggarna</a></Link>
            </nav>
        </header>
    );
};

export default Header;