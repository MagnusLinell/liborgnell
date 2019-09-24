import React from 'react';
import styles from './List.less';

const List = ({ children }) => {
    return (
        <ul className={styles.ul}>
            {children}
        </ul>
    );
};

export default List;