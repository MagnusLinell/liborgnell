import React from 'react';
import styles from './Item.less';

const Item = ({ children }) => {
    return (
        <li className={styles.li}>
            {children}
        </li>
    );
};

export default Item;