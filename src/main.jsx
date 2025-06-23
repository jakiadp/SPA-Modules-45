import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Component/Root/Root.jsx'
import Home from './Component/Home/Home.jsx'
import Mobule from './Component/Mobule/Mobule.jsx'
import Leptop from './Component/Leptop/Leptop.jsx'
import Users from './Component/Users/Users.jsx'
import Users2 from './Component/Users2/Users2.jsx'
import UserDetile from './Component/UserDetile/UserDetile.jsx'

 

const userspromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const router = createBrowserRouter([
 {
  path:'/',
  Component: Root,
  children:[
    {index:true, Component: Home},
    {path:'mobule',Component:Mobule},
    {path:'leptop', Component:Leptop},

    {path:'users',
     loader: () => fetch('https://jsonplaceholder.typicode.com/users'), 
      Component:Users },
      {
        path:'users/:userId',
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${paramas.userId}`),
        Component: UserDetile
      },

      {
        path:'users2',
        element: <Suspense>
          <Users2 userspromise={userspromise} ></Users2>
        </Suspense>

      }
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
