import React from 'react';
import styles from './OldName.less';

const OldName = ({ text }) => {
    return (
        <span className={styles.oldName}>
            {text}
        </span>
    );
};

export default OldName;