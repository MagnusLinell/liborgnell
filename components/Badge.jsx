import React from 'react';
import styles from './Badge.less';

const Badge = ({ text }) => {
    return (
        <div className={styles.badge}>
            {text}
        </div>
    );
};

export default Badge;