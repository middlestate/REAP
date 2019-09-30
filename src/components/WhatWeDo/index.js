import React from 'react'
import PropTypes from 'prop-types'

const WhatWeDo = ({
  heading,
  actions,
}) => (
  <div className='container'>
    <h1 className='has-text-centered has-text-REAP-gray is-size-2'>{heading}</h1>
    <div className='columns is-multiline is mobile centered is-vcentered is-flex'>
      {actions.map(({ image, heading, text }, keys) => (
        <div key={keys} className='column is-3 has-text-centered'>
          <img className='' src={image} style={{ height: '50%', width: '25%', marginTop: 10 }} />
          <h3 className='is-size-4'>{heading}</h3>
          <div className='is-size-6'>{text}</div>
        </div>
      ))}
    </div>
  </div>
)

WhatWeDo.propTypes = {
  heading: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default WhatWeDo
