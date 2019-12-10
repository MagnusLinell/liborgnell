import fetch from 'isomorphic-unfetch';
import { getCurrentLocale } from './locale';

export const fetchPage = async (url) => {
    const locale = getCurrentLocale();
    const response = await fetch(`https://cdn.contentful.com/spaces/64xqbvwx99mx/environments/master/entries?access_token=gqWbB2DnVZKhCDXV1Ib7wTZvpwH6EN80Lv_vhEvxZBs&content_type=page&include=1&fields.url=${url}&locale=${locale}`);
    const body = await response.json();
    return body.items[0].fields;
};