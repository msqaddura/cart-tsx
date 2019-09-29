import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Root: React.SFC<any> = ({ children }) => (
  <div>
    <nav className="navbar navbar-dark bg-dark">
      <NavLink to="/">
        <img src="/images/logo.png" alt="logo" />
      </NavLink>
    </nav>
    {children}
  </div>
)

export default Root
