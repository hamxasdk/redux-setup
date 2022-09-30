import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const RootRouter = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootRouter
