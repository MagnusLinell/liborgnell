import React from 'react';
import styles from './Sections.less';

const Sections = ({ children }) => {
    return (
        <div className={styles.sections}>
            {children}
        </div>
    );
};

export default Sections;