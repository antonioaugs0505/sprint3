import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Solicitacao from './routes/Solicitacao/index.jsx'
import Membros from './routes/Membros/index.jsx'
import Enviado from './routes/Enviado/index.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/solicitacao",
        element: <Solicitacao/>
      }, 
      {
        path: "/membros",
        element: <Membros/>
      },
      {
        path: "/enviado",
        element: <Enviado/>
      }


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)