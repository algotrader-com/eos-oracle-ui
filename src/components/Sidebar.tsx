import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
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
            <p>{securityTypesMap[Object.keys(securityType)[0] as keyof typeof securityTypesMap].name}</p>
        </NavLink>)
    }

    return (
        <span className="sidebar">
            <NavLink to='/home' className='link' activeClassName='activeLink'>
                <FontAwesomeIcon icon={faHome} />
                <p>HOME</p>
            </NavLink>
            {renderNavLinks(state.securityTypes)}
        </span>
    )
}

