import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import React, { useEffect, useReducer } from 'react';
import { SecurityType } from './domain/domain';
import { fetchSecurityTypes } from './api/restApiUtils';
import { StoreContextProvider } from './constants/store';
import reducer from './constants/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, { securityTypes: [], priceMap: {} });
  useEffect(() => {
    getSecurityTypes();
  }, []);

  const getSecurityTypes = async () => {
    try {
      const { securityTypes } = await fetchSecurityTypes();
      dispatch({
        type: 'RECEIVE_SECURITY_TYPES',
        payload: securityTypes.sort((a: SecurityType, b: SecurityType) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]))
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <StoreContextProvider value={{ state, dispatch }}>
          <Sidebar />
          <Main />
        </StoreContextProvider>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
