import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/UI/Header';
import './App.css';
import GlobalStyle from './style/GlobalStyle';
import InfinityScrollText from './components/InfinityScroll/InfinityScrollText';
import { useState } from 'react';

function App() {
  const [isTeamChanged, setIsTeamChanged] = useState(false);

  const urlLocation = useLocation();
  return (
    <>
      <GlobalStyle />
      <InfinityScrollText />
      <Header pathname={urlLocation.pathname} isTeamChanged={isTeamChanged} />
      <Outlet context={{ isTeamChanged, setIsTeamChanged }} />
    </>
  );
}

export default App;
