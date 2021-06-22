import { PriceMap, SecurityType } from "../domain/domain";

const reducer = (state: { securityTypes: SecurityType[], priceMap: PriceMap }, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'RECEIVE_SECURITY_TYPES':
            return {
                ...state,
                securityTypes: action.payload
            };
        case 'UPDATE_PRICE_MAP':
            const { securityType, id, storedPrice } = action.payload;
            return {
                ...state,
                priceMap: {
                    ...state.priceMap,
                    [securityType]: {
                        ...state.priceMap[securityType],
                        [id]: storedPrice
                    }
                }
            };
        default:
            return state;
    }
};

export default reducer;