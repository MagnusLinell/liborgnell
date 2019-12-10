export const getCurrentLocale = () => {
    return typeof window !== 'undefined' && window.navigator && window.navigator.language === 'sv-SE' ? 'sv-SE' : 'en';
};