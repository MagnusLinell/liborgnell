import React from 'react';
import styles from './Article.less';

const Article = ({ children }) => {
    return (
        <article className={styles.article}>
            {children}
        </article>
    );
};

export default Article;