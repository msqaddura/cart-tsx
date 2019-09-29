import * as React from 'react'

interface RootProps {
  className?: string
}

const Root: React.SFC<RootProps> = ({ children }) => (
  <div>
    <nav className="navbar navbar-dark bg-dark">
      <img src="/images/logo.png" alt="logo" />
    </nav>
    {children}
  </div>
)

export default Root
