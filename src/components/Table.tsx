import { AgGridReact } from 'ag-grid-react';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { fetchPrices, fetchSecurities } from '../api/restApiUtils';
import { Price, Security, Error, GridRow, PriceObj } from '../domain/domain';
import './Table.css';
import './ag-theme.scss';
import classNames from 'classnames';
import { ColDef, GridApi, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { StoreContext } from '../constants/store';

interface OwnProps {
    securityType: string;
}

export default function Table(props: OwnProps) {
    const { securityType } = props;

    const { state, dispatch } = useContext(StoreContext);

    const [securities, setSecurities] = useState<Security[]>([]);
    useEffect(() => {
        const getSecurities = async (securityType: string) => {
            try {
                const securities: Security[] | Error = await fetchSecurities(securityType as string);
                if (Array.isArray(securities)) {
                    setSecurities(securities);
                } else {
                    throw `GET securities with '${securityType}' params returned an error: ${securities.error}`;
                }
            } catch (err) {
                console.error(err);
            }
        }

        getSecurities(securityType);

        const interval = setInterval(() => {
            getSecurities(securityType);
        }, 5000);

        return () => clearInterval(interval);
    }, [securityType])


    const [prices, setPrices] = useState<Price[]>([]);
    useEffect(() => {
        const filterPrices = (prices: (Price | Error)[]): Price[] =>
            prices.filter(price => typeof price === 'object' && !price.hasOwnProperty('error')) as Price[];

        const getPrices = async (securities: Security[]) => {
            try {
                const prices: (Price | Error)[] = await fetchPrices(securities.map(security => security.securityId));
                const filteredPrices = filterPrices(prices);

                setPrices(filteredPrices);
            } catch (err) {
                console.error(err);
            }
        }

        securities.length > 0 && getPrices(securities);
    }, [securities])


    const [rowData, setRowData] = useState<Object[]>([]);
    useEffect(() => {
        const indicateChange = (prevPrice: PriceObj | undefined, currPrice: number | undefined) => {
            if (currPrice === undefined || prevPrice === undefined) {
                return undefined;
            }
            const change = Math.sign(prevPrice.value - currPrice)
            if (change !== 0) {
                if (change === -1) return "INCREASE";
                if (change === 1) return "DECREASE";
            } else {
                return prevPrice.change;
            }
            return undefined;
        }

        const prepareRowData = (prices: Price[]): GridRow[] => prices.map(price => {
            const id = `${price.securityId}${price.symbol}${price.exchangeName}${price.quoteCurrency}`;
            const currentPrice = parseFloat(price.lastTradedPrice);
            const previousPrice = state.priceMap[securityType] && state.priceMap[securityType][id];
            const indicatedChange = indicateChange(previousPrice, currentPrice);
            dispatch({
                type: 'UPDATE_PRICE_MAP',
                payload: {
                    securityType: securityType,
                    id: id,
                    storedPrice: {
                        change: indicatedChange,
                        value: currentPrice
                    }
                }
            })
            return {
                id: price.securityId,
                symbol: parseNullOrUndefined(price.symbol) || '-',
                exchange: parseNullOrUndefined(price.exchangeName) || '-',
                currency: parseNullOrUndefined(price.quoteCurrency) || '-',
                lastUpdatedTime: (parseNullOrUndefined(price.timestamp) && (moment(price.timestamp, 'x').utc().format('HH:mm:ss').toString() + ' UTC')) || '-',
                latestPrice: { change: indicatedChange, value: currentPrice },
            }
        })
        setRowData(prepareRowData(prices));
    }, [prices])


    const [gridApi, setGridApi] = useState<GridApi | undefined>(undefined);
    useEffect(() => {
        gridApi && gridApi.setRowData(rowData);
        gridApi && gridApi.sizeColumnsToFit();
    }, [rowData, gridApi])

    const parseNullOrUndefined = (value: string) => {
        return value === "null" ? null
            : value === "undefined" ? undefined
                : value;
    }

    const onGridReady = async (params: GridReadyEvent) => {
        const { api, columnApi } = params;
        if (api && columnApi) {
            setTimeout(() => (api ? api.sizeColumnsToFit() : undefined), 0);
            setGridApi(api);
        }
    }

    const ColourCellRenderer = (params: ICellRendererParams) => {
        if (params.value.change === 'INCREASE')
            return <><span style={{ color: 'green', marginLeft: "5px" }}>▲</span>{params.value.value}</>
        else if (params.value.change === 'DECREASE')
            return <><span style={{ color: 'red', marginLeft: "5px" }}>▼</span>{params.value.value}</>
        else
            return params.value.value || '-'
    }

    const frameworkComponents = {
        'colourCellRenderer': ColourCellRenderer
    };

    const colDef: ColDef[] = [
        { headerName: 'Symbol', field: 'symbol', sortable: true, filter: true },
        { headerName: 'Exchange', field: 'exchange', sortable: true, filter: true },
        { headerName: 'Currency', field: 'currency', sortable: true, filter: true },
        { headerName: 'Latest Price', field: 'latestPrice', sortable: true, filter: true, cellRenderer: "colourCellRenderer", cellClass: ['rightAligned'] },
        { headerName: 'Last Updated Time', field: 'lastUpdatedTime', sortable: true },
    ]

    return (
        <div className={classNames("ag-theme-material", 'table')}>
            <AgGridReact
                rowData={[]}
                onGridReady={onGridReady}
                animateRows
                frameworkComponents={frameworkComponents}
                columnDefs={colDef}
            />
        </div >)
}