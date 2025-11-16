import React from 'react'
import Navbar from './layouts/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Menu from './layouts/Menu'

const Layout = () => {


  return (
    <div className='max-w-[1550px] min-h-screen mx-auto '>
        <div className='relative z-700'>
          <Menu/>
        </div>
        <div className='relative z-600'>
            <Navbar/>
        </div>
          <main className='w-full h-full'>
              <Outlet />
          </main>
    </div>
  )
}

export default Layout
