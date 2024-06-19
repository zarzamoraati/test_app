import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter,RouterProvider } from 'react-router-dom'
import { Layout } from './router/Layout'
import { Home } from './router/Home'
import { About } from './router/About'

const router=createHashRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },{
        path:"/about",
        element:<About/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
