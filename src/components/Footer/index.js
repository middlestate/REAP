import React from 'react'
// import config from '../../../config'
import { Link } from 'gatsby'
import Logo from '../../assets/img/reap_white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='footer is-paddingless'>
      <div className='section '>
        <div className='columns is-mobile'>
          <div className='column is-4'>
            <ul style={{ listStyleType: 'none' }}>
              <li className='fabs'>
                <FontAwesomeIcon icon={['fab', 'facebook']} size='2x' />
              </li>
              <li className='fabs'>
                <FontAwesomeIcon icon={['fab', 'twitter']} size='2x' />
              </li>
              <li className='fabs'>
                <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='section is-low-starch-blue'>
        <div className='columns is-centered is-mobile'>
          <div className='column is-one-fifth-desktop is-half-mobile'>
            <figure className='image is-128x128'>
              <img src={Logo} />
            </figure>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
