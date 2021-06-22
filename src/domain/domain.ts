
export type SecurityType = {
    [key: string]: string;
}

export interface Security {
    securityId: number,
    symbol: string,
    exchangeName: string,
    securityType: string,
    quoteCurrency: string,
}

export interface Price {
    timestamp: string,
    securityId: number,
    symbol: string,
    exchangeName: string,
    quoteCurrency: string,
    lastTradedPrice: string,
}

export interface Error {
    error: {
        description?: string,
        securityId?: string,
    }
}

export interface GridRow {
    id: number,
    symbol: string,
    exchange: string,
    currency: string,
    lastUpdatedTime: string,
    latestPrice: PriceObj,
}

export interface PriceObj {
    value: number,
    change?: "INCREASE" | "DECREASE",
}

export interface PriceMap {
    [securityType: string]: {
        [id: string]: PriceObj
    }
}
