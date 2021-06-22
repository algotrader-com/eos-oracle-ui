import { faCoins, faIndent, faMoneyBillAlt, faUniversity } from "@fortawesome/free-solid-svg-icons";

export const securityTypesMap = {
    equity: { name: "Equities", icon: faUniversity },
    forex: { name: "Forex", icon: faMoneyBillAlt },
    index: { name: "Indices", icon: faIndent },
    spot_cryptos: { name: "Cryptos", icon: faCoins }
}