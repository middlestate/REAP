import React from 'react'
// import config from '../../../config'
import { Link } from 'gatsby'
import Logo from '../../assets/img/reap_white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='footer is-paddingless is-REAP-orange'>
      <div className='section '>
        <div className='columns is-multiline is-mobile is-centered'>
          <div className='column is-3 is-offset-1 has-text-white'>
            <ul className='is-flex' style={{ listStyleType: 'none' }}>
              <li className='fabs' style={{ marginRight: 10 }}>
                <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' />
              </li>
              <li className='fabs'>
                <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
              </li>
            </ul>
            <p>Contact:</p>
            <a className='has-text-white' href='mailto:info@reapfoundation.org'>info@reapfoundation.org</a>
          </div>
          <div className='column is-4 has-text-centered'>
            <img src={Logo} />
          </div>
          <div className='column is-4 has-text-white'>
            <ul style={{ listStyleType: 'none' }}>
              <li>About</li>
              <li>Program</li>
              <li>Contact</li>
              <li>Academic Resources</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
