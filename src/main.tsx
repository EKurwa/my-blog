import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'animate.css'
import App from './App.tsx'
import '/@/style/normalize.css'
import '/@/style/root.scss'
import routers from './routers/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
    <App />
  </React.StrictMode>
)
