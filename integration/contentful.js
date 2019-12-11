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

export const fetchBeers = async (headers) => {
    const locale = headers ? acceptLanguageParser.pick(['sv-SE', 'en'], headers['accept-language']) || 'en' : document.getElementsByTagName('html')[0].lang || 'en'; 
    const fetched = await fetch(`https://cdn.contentful.com/spaces/64xqbvwx99mx/environments/master/entries?access_token=gqWbB2DnVZKhCDXV1Ib7wTZvpwH6EN80Lv_vhEvxZBs&content_type=beer&include=2&order=-fields.brewedAt&locale=${locale}`);
    const fetchedBody = await fetched.json();
    const fetchedBeers = fetchedBody.items.map(item => item.fields);
    const images = fetchedBody.includes.Asset;
    const mappedBeers = fetchedBeers.map(beer => {
        const image = images.find(image => (image && image.sys.id) === (beer.image && beer.image.sys.id));
        return { ...beer, image: image && { ...image.fields.file } };
    });
    return mappedBeers;
}