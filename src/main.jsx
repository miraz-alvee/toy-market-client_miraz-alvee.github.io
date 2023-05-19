import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home.jsx';
import AllToys from './Pages/AllToys.jsx';
import MyToys from './Pages/MyToys.jsx';
import AddToys from './Pages/AddToys.jsx';
import Blog from './Pages/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/alltoys',
        element:<AllToys></AllToys>,
      },
      {
        path: '/mytoys',
        element:<MyToys></MyToys>,
      },
      {
        path: '/addtoys',
        element:<AddToys></AddToys>,
      },
      {
        path: '/blog',
        element:<Blog></Blog>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
