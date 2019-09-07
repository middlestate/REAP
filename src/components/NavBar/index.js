import React from 'react'
import { Link } from 'gatsby'
// import SearchBox from '../SearchBox'
import Logo from '../../assets/img/reap_white.svg'
const NavBar = ({ toggleNavbar, isActive }) => (
  <nav className='navbar has-text-white is-transparent' aria-label='main navigation' style={{ position: 'absolute', top: 0, left: 0 }}>
    <div className='navbar-brand is-centered' style={{ flex: 1, justifyContent: 'center' }}>
      <Link to='/' className='navbar-item'>
        <figure className='image' style={{ width: 500, marginRight: 5 }}>
          <img src={Logo} />
        </figure>
      </Link>
      <div className={`navbar-burger ${isActive ? 'is-active' : ''}`} data-target='navMenu' onClick={toggleNavbar}>
        <span />
        <span />
        <span />
      </div>
    </div>
    <div className={`navbar-menu ${isActive ? 'is-active is-transparent' : ''}`} id='navMenu'>
      <div className='navbar-end' style={{ flex: 1, justifyContent: 'center' }}>
        <Link className='navbar-item has-text-white' to='/about'>
          ABOUT
        </Link>
        <Link className='has-text-white navbar-item' to='/program'>
          PROGRAM
        </Link>
        <Link className='has-text-white navbar-item' to='/contact'>
          CONTACT
        </Link>
        <a href='#sponsor' className='button has-text-white' style={{ marginTop: 5 }}>
          BECOME A SPONSER
        </a>
        <a
          href='#donate'
          className='button donate has-text-white'
          style={{ marginTop: 5, marginRight: 10 }}>
          DONATE
        </a>

      </div>
    </div>
  </nav>
)

export default NavBar
