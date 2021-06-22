
import { createContext, Dispatch } from "react";
import { PriceMap, SecurityType } from "../domain/domain";

type State = {
    securityTypes: SecurityType[],
    priceMap: PriceMap
}

const initialState = {
    securityTypes: [],
    priceMap: {}
};

const StoreContext = createContext<{
    state: State,
    dispatch: Dispatch<any>
}>({
    state: initialState,
    dispatch: () => undefined
});

const StoreContextProvider = StoreContext.Provider;

export { initialState, StoreContext, StoreContextProvider };