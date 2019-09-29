import * as React from 'react'
import { NavLink } from 'react-router-dom'

const Root: React.FC = ({ children }) => (
  <>
    <nav className="navbar navbar-dark bg-dark">
      <NavLink to="/">
        <img src="/images/logo.png" alt="logo" />
      </NavLink>
    </nav>
    <div className="container">{children}</div>
  </>
)

export default Root
