import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/UI/Header';
import './App.css';
import GlobalStyle from './style/GlobalStyle';
import InfinityScrollText from './components/InfinityScroll/InfinityScrollText';
import { useEffect, useState } from 'react';

function App() {
  const [isTeamChanged, setIsTeamChanged] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsTeamChanged(false);
  }, [pathname]);

  return (
    <>
      <GlobalStyle />
      <InfinityScrollText />
      <Header pathname={pathname} isTeamChanged={isTeamChanged} />
      <Outlet />
    </>
  );
}

export default App;