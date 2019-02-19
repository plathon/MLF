import React from 'react'

import Sidebar from './layout/Sidebar'
import Topbar from './layout/Topbar'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

import ResetPasswordPage from './pages/ResetPasswordPage'
import UpdatePasswordPage from './pages/UpdatePasswordPage'

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
    },
    {
      path: "/signin",
      topbar: () => <div></div>,
      sidebar: () => <div></div>,
      main: () => <LoginPage />
    },
    {
      path: "/password/reset",
      topbar: () => <div></div>,
      sidebar: () => <div></div>,
      main: () => <ResetPasswordPage />
    },
    {
      path: "/password/update",
      topbar: () => <div></div>,
      sidebar: () => <div></div>,
      main: () => <UpdatePasswordPage />
    }
]

export default routes
  