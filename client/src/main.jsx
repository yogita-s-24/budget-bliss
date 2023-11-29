import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/Home/Home.jsx'
import About from './views/About/About.jsx'
import AddTransaction from './views/AddTransaction/AddTransaction.jsx';
import ShowTransaction from './views/ShowTransaction/ShowTransaction.jsx';
import Login from './views/Login/Login.jsx'
import Signup from './views/Signup/Signup.jsx'


const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/addtransaction",
        element:<AddTransaction />
    },
    {
        path:"/showtransaction",
        element:<ShowTransaction />
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);
