export default (queryParams, name) => {
    // eslint-disable-next-line no-useless-escape
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
    const results = regex.exec(queryParams);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};