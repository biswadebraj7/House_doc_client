import React from 'react'
import ReactDOM from 'react-dom/client'
import {

 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import './index.css'
import {
  
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import About from './Pages/About';

import Home from './Pages/Home';
import Login from './Auth/Login';
import Errors from './Error/Errors';
import ProviderContext from './Provider/ProviderContext';
import Register from './Auth/Register';
import Dashboard from './Dashboard/Dashboard';
// Create a client
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  errorElement:<Errors></Errors>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/reg",
        element:<Register></Register>
      },
     
    ]
  },
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[

    ] }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <ProviderContext>
  <RouterProvider router={router} />
  </ProviderContext>

     </QueryClientProvider>
 
  </React.StrictMode>,
)
