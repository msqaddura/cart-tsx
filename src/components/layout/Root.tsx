import * as React from 'react'
import { NavLink } from 'react-router-dom'

const Root: React.FC = ({ children }) => (
  <>
    <nav className="navbar navbar-dark bg-dark">
      <NavLink to="/">
        <i className="fa fa-home fa-2x" />
      </NavLink>
    </nav>
    <div className="container">{children}</div>
  </>
)

export default Root
