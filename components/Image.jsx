import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames';
import styles from './Image.less';

const Image = ({ src, alt, width, height, className }) => {
    if (!src) {
        return <div className={classNames(styles.image, className)}></div>
    }
    return (
        <LazyLoadImage
            className={classNames(styles.image, className)}
            alt={alt}
            height={height}
            width={width}
            debounce={false}
            src={src}
        />
    );
};

export default Image;