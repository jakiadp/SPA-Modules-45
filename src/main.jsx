import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Component/Root/Root.jsx'
import Home from './Component/Home/Home.jsx'
import Mobule from './Component/Mobule/Mobule.jsx'
import Leptop from './Component/Leptop/Leptop.jsx'


const router = createBrowserRouter([
 {
  path:'/',
  Component: Root,
  children:[
    {index:true, Component: Home},
    {path:'mobule',Component:Mobule},
    {path:'leptop', Component:Leptop}
  ]
 },
  {
    path:'/',
    element: <div>Iam about</div>
  },
  {
    path:'blogs',
    element : <div>All blog my page love</div>
  },
  {
    path:'app',
    Component:App
  },
  {
    path:'/app2',
    // element: <App></App>
    Component:App
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
 
  </StrictMode>,
)
