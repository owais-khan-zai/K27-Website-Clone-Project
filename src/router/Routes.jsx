import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Agency from '../pages/Agency'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element= { <Layout/> } >
          <Route index element= { <Home/> } />
          <Route path='agency' element= { <Agency/> } />
          <Route path='projects' element={ <Projects/> } />
        </Route>
    </Routes>
  )
}

export default Router
