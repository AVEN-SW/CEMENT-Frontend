import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import MainPage from './pages/MainPage.tsx';
import CulturePage from './pages/CulturePage.tsx';
import PeoplePage from './pages/PeoplePage.tsx';
import Benefit from './pages/Benefit.tsx';

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
        path: 'culture',
        element: <CulturePage />,
      },
      {
        path: 'people',
        element: <PeoplePage />,
      },
      {
        path: 'benefit',
        element: <Benefit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);