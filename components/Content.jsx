import React from 'react';
import styles from './Content.less';

const Content = ({ children }) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
};

export default Content;