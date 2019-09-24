import React from 'react';
import classNames from 'classnames';
import styles from './Image.less';

const Image = ({ src, alt, className }) => {
    if (!src) {
        return <div className={classNames(styles.image, className)}></div>
    }
    return (
        <img className={classNames(styles.image, className)} src={src} alt={alt} />
    );
};

export default Image;