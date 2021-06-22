import { useEffect } from 'react';
import './Footer.css';
import GitHubButton from 'react-github-btn';

export default function Footer() {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://buttons.github.io/buttons.js";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://buttons.github.io/buttons.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className="footer">
            <GitHubButton
                href="https://github.com/algotrader-com/eos-oracle-contract"
                data-icon="octicon-star"
                aria-label="Star algotrader-com/eos-oracle-contract on GitHub"
                data-size="large"
            >
                EOSIO Oracle Contract
            </GitHubButton>
            <GitHubButton
                href="https://github.com/algotrader-com/eos-oracle-api"
                data-icon="octicon-star"
                aria-label="Star algotrader-com/eos-oracle-api on GitHub"
                data-size="large"
            >
                EOSIO Oracle API
            </GitHubButton>
            <GitHubButton
                href="https://github.com/algotrader-com/eos-oracle-ui"
                data-icon="octicon-star"
                aria-label="Star algotrader-com/eos-oracle-ui on GitHub"
                data-size="large"
            >
                EOSIO Oracle UI
            </GitHubButton>
            <h4 className="title">© 2021 AlgoTrader AG</h4>
        </div >
    )
}