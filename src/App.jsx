import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GroupChat from './pages/groupChat/GroupChat'

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
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App
