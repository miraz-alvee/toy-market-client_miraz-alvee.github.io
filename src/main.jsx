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
import Login from './Login/Login.jsx';
import Signup from './SignUp/Signup.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>,
      },
      {
        path: '/mytoys',
        element: <MyToys></MyToys>,
      },
      {
        path: '/addtoys',
        element: <AddToys></AddToys>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
