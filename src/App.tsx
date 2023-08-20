import { Outlet } from 'react-router-dom'
import Header from './components/UI/Header'
import './App.css'
import GlobalStyle from './style/GlobalStyle'


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  )
}

export default App
