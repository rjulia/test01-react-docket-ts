import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import ProjectsPage from './pages/projects/ProjectsPage'
import TypescriptHooks from './pages/use-state-components/UseStateComponents'
import Product from './pages/project/Project'
import ErrorPage from "./pages/error-page/error-page"
import UseReducerComponent from './pages/use-reducer-component/UseReducerComponent'
import CustomHookComponent from './pages/custom-hook-component/CustomHookComponent'

function App() {
  return (

    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProjectsPage />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="typescripthooks" element={<TypescriptHooks />} />
          <Route path="reducer" element={<UseReducerComponent />} />
          <Route path="customhook" element={<CustomHookComponent />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
