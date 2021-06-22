import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { useContext } from 'react';
import { SecurityType } from '../domain/domain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { securityTypesMap } from '../constants/securityTypesMap';
import { StoreContext } from '../constants/store';

export default function Sidebar() {
    const { state } = useContext(StoreContext);

    const renderNavLinks = (securityTypes: SecurityType[]) => {
        return !!securityTypes.length && securityTypes.map((securityType, index) => <NavLink
            to={`/${Object.keys(securityType)[0]}`}
            className='link'
            activeClassName='activeLink'
            key={index}
        >
            <FontAwesomeIcon icon={securityTypesMap[Object.keys(securityType)[0] as keyof typeof securityTypesMap].icon} />
            <h2>{securityTypesMap[Object.keys(securityType)[0] as keyof typeof securityTypesMap].name}</h2>
        </NavLink>)
    }

    return (
        <span className="sidebar">
            <NavLink to='/home' className='link' activeClassName='activeLink'>
                <FontAwesomeIcon icon={faHome} />
                <h2>Home</h2>
            </NavLink>
            {renderNavLinks(state.securityTypes)}
        </span>
    )
}

