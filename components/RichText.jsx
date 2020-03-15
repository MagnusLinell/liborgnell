import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';

const RichText = ({ text }) => {
    if (!text) {
        return null;
    }
    return (
        <div>
            {documentToReactComponents(text)}
        </div>
    );
};

export default RichText;