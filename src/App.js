import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router';
import './App.css'
import { styled } from 'styled-components';
import AbaNavegacao from './components/AbaNavegacao/AbaNavegacao';

const Main = styled.main`
  background-color: #3f8978;
  height: 100vh;
  padding: 32px;

`

function App() {
  return (
    <HelmetProvider>
      <Helmet><title>POOT</title></Helmet>
      <Main>
        <AbaNavegacao></AbaNavegacao>
        <Outlet />
      </Main>
    </HelmetProvider>  
  );
}

export default App;
