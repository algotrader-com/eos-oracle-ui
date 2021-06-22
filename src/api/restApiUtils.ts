import axios from "axios";
import { Urls } from "../constants/urls";
import { Price, Security, Error, SecurityType } from "../domain/domain";


export function fetchSecurityTypes(): Promise<{ securityTypes: SecurityType[] }> {
    return axios.get(Urls.SECURITY_TYPES).then(response => response.data);
}

export function fetchSecurities(securityType: string): Promise<Security[] | Error> {
    return axios.get(`${Urls.SECURITIES}?securityType=${securityType}`).then(response => response.data);
}

export function fetchPrices(securityIds: number[]): Promise<(Price | Error)[]> {
    return axios.get(`${Urls.PRICES}?securityIds=${securityIds.join(',')}`).then(response => response.data);
}

