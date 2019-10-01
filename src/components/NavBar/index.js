import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../assets/img/reap_white.svg'
// import SearchBox from '../SearchBox'

const NavBar = ({ isActive, toggleNavbar }) => (
  <nav
    className='navbar is-fixed-top has-text-white is-REAP-orange'
    aria-label='main navigation'
  >
    <div
      className='navbar-brand is-centered is-size-1'
      style={{ flex: 1, justifyContent: 'center' }}>
      <Link to='/' className='navbar-item'>
        {/* <figure className='image' > */}
        <img src={Logo} />
        {/* </figure> */}
      </Link>
      <div
        className={`navbar-burger ${isActive ? 'is-active' : ''}`}
        data-target='navMenu'
        onClick={toggleNavbar}>
        <span />
        <span />
        <span />
      </div>
    </div>
    <div
      className={`navbar-menu is-REAP-orange ${isActive ? 'is-active ' : ''}`}
      id='navMenu'>
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
        {/* <a
          href='#sponsor'
          className='button has-text-white'
          style={{ marginTop: 5 }}>
          BECOME A SPONSER
        </a> */}
        <a
          href='#donate'
          className='button donate has-text-white is-vcentered'
          style={{ marginTop: 18 }}>
          DONATE
        </a>
      </div>
    </div>
  </nav>
)

export default NavBar
