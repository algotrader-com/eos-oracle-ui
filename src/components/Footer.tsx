import './Footer.scss';

export default function Footer() {

    return (
        <div className="footer">
            <span className='placeholder' />
            <span className='links'>
                <a className="footer-title" href={`https://github.com/algotrader-com/eos-oracle-contract`} target="_blank" rel="noreferrer">EOSIO Oracle Contract</a>
                <a className="footer-title" href={`https://github.com/algotrader-com/eos-oracle-api`} target="_blank" rel="noreferrer">EOSIO Oracle API</a>
                <a className="footer-title" href={`https://github.com/algotrader-com/eos-oracle-ui`} target="_blank" rel="noreferrer">EOSIO Oracle UI</a>
                <span className="copyright">{"C 2021 "}<a href={`https://algotrader.com/`} target="_blank" rel="noreferrer">AlgoTrader</a></span>
            </span>
        </div >
    )
}