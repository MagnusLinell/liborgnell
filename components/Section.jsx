import React from 'react';
import styles from './Section.less';

const Section = ({ children }) => {
    return (
        <section className={styles.section}>
            {children}
        </section>
    );
};

export default Section;