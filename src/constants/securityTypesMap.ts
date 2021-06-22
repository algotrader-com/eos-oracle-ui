import { faCoins, faIndent, faMoneyBillAlt, faUniversity } from "@fortawesome/free-solid-svg-icons";

export const securityTypesMap = {
    equity: { name: "EQUITIES", icon: faUniversity },
    forex: { name: "FOREX", icon: faMoneyBillAlt },
    index: { name: "INDICES", icon: faIndent },
    spot_cryptos: { name: "CRYPTOS", icon: faCoins }
}