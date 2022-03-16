import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ padding: '1rem', background: '#1c2126' }}>
      <div className="container-fluid">
        <h3 className="navbar-brand" href="#">
          FreeGameSearcher.app {' '}
          <span style={{ fontSize: '12px', color: '#164c82' }}>
            powered by FREETOGAME.com
          </span>
        </h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " href="https://www.freetogame.com/" target='_blank'>
                FREETOGAME.com
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>About FreeGameSearcher</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header