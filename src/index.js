import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/Home';
import GamePage from './pages/GamePage';
import ArtigoPage from './pages/ArtigoPage';
import ConsolePage from './pages/ConsolePage';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>,
    children: [
      {path: '/', element: <HomePage/>},
      {path: '/Game', element: <GamePage/>},
      {path: '/Artigo', element: <ArtigoPage/>},
      {path: '/Console', element: <ConsolePage/>}
    ]
    
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
