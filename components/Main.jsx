import React from 'react';
import classNames from 'classnames';
import styles from './Main.less';

const Main = ({ children, center }) => {
    return (
        <main className={classNames(styles.main, center && styles.center)}>
            {children}
        </main>
    );
};

export default Main;