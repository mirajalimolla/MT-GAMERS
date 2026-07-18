import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GroupChat from './pages/groupChat/GroupChat'
import Login from './pages/login/Login'
import ForgotPassword from './pages/login/forgotPassword'
import Signup from './pages/signUp/Signup'

function App() {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Home />
        },
        {
            path:"/groupChat",
            element: <GroupChat />
        },
        {
            path:"/login",
            element: <Login />
        },
        {
            path:"login/forgotPassword",
            element:<ForgotPassword />
        },
        {
            path:"/signup",
            element: <Signup />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App
