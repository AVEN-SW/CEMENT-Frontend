import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import MainPage from './pages/MainPage.tsx';
import CulturePage from './pages/CulturePage.tsx';
import CementPeoplePage from './pages/CementPeoplePage.tsx';
import BenefitPage from './pages/BenefitPage.tsx';
import PortfolioPage from './pages/PortfolioPage.tsx';
import AvenPeoplePage from './pages/AvenPeoplePage.tsx';
import RootPeoplePage from './pages/RootPeoplePage.tsx';

declare global {
  interface Window {
    naver: any;
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'about-us',
        element: <CulturePage />,
        children: [
          { path: 'cement', element: <CulturePage /> },
          { path: 'culture', element: <CulturePage /> },
        ],
      },
      {
        path: 'people',
        element: <RootPeoplePage />,
        children: [
          { path: 'cement', element: <CementPeoplePage /> },
          { path: 'aven', element: <AvenPeoplePage /> },
          { path: 'aven-mate', element: <AvenPeoplePage /> },
          { path: 'celebrity', element: <CementPeoplePage /> },
        ],
      },
      {
        path: 'benefit',
        element: <BenefitPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);