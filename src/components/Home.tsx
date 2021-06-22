
import { RouteComponentProps } from 'react-router';
import algotrader from '../resources/images/algotrader.svg';
import eosio from '../resources/images/eosio.svg';
import './Home.css';

export default function Home(props: RouteComponentProps) {
    return (
        <div className="home">
            <h1>EOSIO Market Data Oracle</h1>
            <div className="images">
                <img src={algotrader} alt="AlgoTrader" width={230} />
                <img src={eosio} alt="EOSIO" width={125} />
            </div>
            <h4>The Market Data Oracle provides live market data for selected</h4>
            <h4>instruments free of charge through the EOSIO blockchain</h4>
            <h5 className='postscript'>
                {"The full source of the "}
                <a href="https://github.com/algotrader-com/eos-oracle-contract" target="_blank" rel="noreferrer">EOSIO Smart Contract</a>
                {", the "}
                <a href="https://github.com/algotrader-com/eos-oracle-api" target="_blank" rel="noreferrer">REST API</a>
                {" and the "}
                <a href="https://github.com/algotrader-com/eos-oracle-ui" target="_blank" rel="noreferrer">User Interface</a>
                {" can be found on GitHub"}
                <br />
                {"See also the "}
                <a href={`${window.location.origin}/api-docs`} target="_blank" rel="noreferrer">Swagger documentation</a>
            </h5>
        </div>
    )
}