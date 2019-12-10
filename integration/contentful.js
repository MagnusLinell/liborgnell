import fetch from 'isomorphic-unfetch';
import acceptLanguageParser from 'accept-language-parser';

export const fetchPage = async (url, headers) => {
    const locale = headers ? acceptLanguageParser.pick(['sv-SE', 'en'], headers['accept-language']) || 'en' : document.getElementsByTagName('html')[0].lang || 'en'; 
    const response = await fetch(`https://cdn.contentful.com/spaces/64xqbvwx99mx/environments/master/entries?access_token=gqWbB2DnVZKhCDXV1Ib7wTZvpwH6EN80Lv_vhEvxZBs&content_type=page&include=1&fields.url=${url}&locale=${locale}`);
    const body = await response.json();
    return {
        locale,
        page: body.items[0].fields
    };
};