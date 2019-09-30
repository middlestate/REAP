import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({
  text,
  cite,
}) => (
  <div className='container has-text-white'>
    <div className='columns is-centered'>
      <div className='column is-half has-text-centered'>
        <p className='is-size-4'>{text}</p>
        <p className='is-size-7'>{cite}</p>
      </div>
    </div>
  </div>
)

Quote.propTypes = {
  text: PropTypes.string,
  cite: PropTypes.string,
}

export default Quote
