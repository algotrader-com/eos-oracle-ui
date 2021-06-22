

export const URL_PREFIX = process.env.REACT_APP_SERVER_URL || '';
export const Urls = {
    SECURITY_TYPES: `${URL_PREFIX}/securityTypes`,
    SECURITIES: `${URL_PREFIX}/securities`,
    PRICES: `${URL_PREFIX}/prices`,
}