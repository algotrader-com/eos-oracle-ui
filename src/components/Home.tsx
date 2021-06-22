
import { RouteComponentProps } from 'react-router';
import algotrader from '../resources/images/algotrader.svg';
import cross from '../resources/images/cross.png';
import eos from '../resources/images/EOS.png';
import './Home.scss';

export default function Home(props: RouteComponentProps) {
    return (
        <div className="home">
            <div className="images">
                <img src={algotrader} alt="AlgoTrader" width={270} />
                <img src={cross} width={23} style={{ marginTop: '23px' }} />
                <img src={eos} alt="EOS" width={190} />
            </div>
            <h1>Connecting EOS To Real-World Data</h1>
            <h4>The EOSIO Market Data Oracle provides real-time market data information for the EOS  <br />blockchain. An open-source solution to create digital securities and get live market prices <br /> simply by interacting with a smart contract or via REST API.</h4>
            <h5 className='postscript'>
                {"The full source of the "}
                <a href="https://github.com/algotrader-com/eos-oracle-contract" target="_blank" rel="noreferrer">EOSIO Smart Contract</a>
                {", the "}
                <a href="https://github.com/algotrader-com/eos-oracle-api" target="_blank" rel="noreferrer">REST API</a>
                {" and the "}
                <a href="https://github.com/algotrader-com/eos-oracle-ui" target="_blank" rel="noreferrer">User Interface</a>
                {" can be found on GitHub. "}
                {"See also the "}
                <a href={`${window.location.origin}/api-docs`} target="_blank" rel="noreferrer">Swagger documentation</a>{"."}
            </h5>
        </div>
    )
}