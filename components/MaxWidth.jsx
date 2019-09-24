import React from 'react';
import styles from './MaxWidth.less';

const MaxWidth = ({ children }) => {
    return (
        <div className={styles.maxWidth}>
            {children}
        </div>
    );
};

export default MaxWidth;