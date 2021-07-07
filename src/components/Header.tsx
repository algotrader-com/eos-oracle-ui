import './Header.scss';
import oracle from '../resources/images/oracle-icon.png';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <img className="sygnet" src={oracle} alt="Oracle" width={35} />
                <h2 className="title">EOSIO<br />Market Data Oracle</h2>
            </div>
        </header>
    )
}