import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Logo from '../../assets/img/REAP_logo.svg'

const ForStudents = ({
  heading,
  cards,
}) => (
  <Fragment>
    <div className='container has-text-centered'>
      <img src={Logo} />
      <p className='has-text-centered is-size-3'>{heading}</p>
    </div>
    <div className='container'>
      <div className='columns is-centered is-mobile'>
        <div className='column is-10 is-offset-1'>
          <div className='tile is-ancestor '>
            <div className='tile is-parent'>
              {cards.map(({ title, text }, keys) =>
                <article key={keys} className='tile is-4 is-child has-text-centered box' >
                  <p className='title '>{title}</p>
                  <div className='content'>
                    <p>{text}</p>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='columns is-centered'>
      <div className='column is-half has-text-centered'>
        <div className='button is-REAP-orange has-text-white is-large'>Learn More</div>
      </div>
    </div>

  </Fragment>
)

ForStudents.propTypes = {
  heading: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default ForStudents
