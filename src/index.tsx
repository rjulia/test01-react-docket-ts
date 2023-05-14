import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Product from './components/project/Project'
import TypescriptHooks from './pages//TypescriptHooksPage'
import reportWebVitals from './reportWebVitals'
import ErrorPage from "./error-page"
import UseReducerComponent from './components/use-reducer-component/UseReducerComponent'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:id",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/typescripthooks",
    element: <TypescriptHooks />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reducer",
    element: <UseReducerComponent />,
    errorElement: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
