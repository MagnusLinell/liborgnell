import React from 'react';
import OldName from '../components/OldName';
import Image from '../components/Image';

const Beer = ({ title, oldTitle, brewedAt, amount, alcoholVolume, image, description, locale }) => {
    return (
        <div>
            <h2>{title} {oldTitle && <OldName text={oldTitle} />}</h2>
                <p>{brewedAt} - {amount} liter - {alcoholVolume ? alcoholVolume : (locale === 'sv-SE' ? 'okänd' : 'unknown')}%</p>
                <p>{description}</p>
        </div>
    );
};

export default Beer;