import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { StoreContext } from '../constants/store';
import { SecurityType } from '../domain/domain';
import Home from './Home';
import './Main.scss';
import TableContainer from './TableContainer';

export default function Main() {
    const { state } = useContext(StoreContext);

    const renderRoutes = (securityTypes: SecurityType[]) => securityTypes.length > 0 && securityTypes.map((securityType, index) =>
        <Route path={`/${Object.keys(securityType)[0]}`} component={TableContainer} key={index} />)

    return (
        <main className='main'>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/home' />} />
                <Route path='/home' component={Home} exact />
                {renderRoutes(state.securityTypes)}
            </Switch>
        </main>
    )
}