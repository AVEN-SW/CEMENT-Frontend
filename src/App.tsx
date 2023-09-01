import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/UI/Header';
import './App.css';
import GlobalStyle from './style/GlobalStyle';

function App() {
  const urlLocation = useLocation();
  return (
    <>
      <GlobalStyle />
      <Header pathname={urlLocation.pathname} />
      <Outlet />
    </>
  );
}

export default App;
