import React from 'react'

import Sidebar from './layout/Sidebar'
import Topbar from './layout/Topbar'

import RegisterPage from './pages/RegisterPage'
import HomePage     from './pages/HomePage'

const routes = [
    {
      path: "/",
      exact: true,
      topbar: () => <Topbar />,
      sidebar: () => <Sidebar />,
      main: () => <HomePage />
    },
    {
      path: "/signup",
      topbar: () => <div></div>,
      sidebar: () => <div></div>,
      main: () => <RegisterPage />
    }
]

export default routes
  