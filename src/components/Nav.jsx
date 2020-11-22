import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
