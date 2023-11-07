import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import myCustomRouter from './Route/Route'

// const myCustomRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>home</div>
//   },
//   {
//     path: '/products',
//     element: <div>products</div>
//   }
// ]);

// const myCustomRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <section><p>this is fixed</p>
//       <Outlet></Outlet>

//     </section>,
//     children: [
//       {
//         path: '/',
//         element: <div>this is home</div>
//       },
//       {
//         path: '/products',
//         element: <div> products</div>
//       }
//     ]
//   },
// ])

// const myCustomRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: '/products',
//         element: <Products></Products>
//       }
//     ]
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCustomRouter}></RouterProvider>
  </React.StrictMode>,
)
