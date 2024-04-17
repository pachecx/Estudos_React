import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom';
import Contact from './routes/Contacts.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import { Home } from './Home.jsx';
import { Props } from './page/Props.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"contact",
    element: <Contact/>
  },
  {
    path:"/home",
    element: <Home/>
  },
  {
    path: "/props",
    element: <Props/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
