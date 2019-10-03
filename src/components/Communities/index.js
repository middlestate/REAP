import React from 'react'
import PropTypes from 'prop-types'

const Community = ({
  image,
  heading,
  text,
}) => (
  <div className='container'>
    {/* 'container is-REAP-orange'> */}
    <div className='columns is-multiline center'>
      <div className='column'>
        <h2 className='is-size-3'>{heading}</h2>
        <p className='is-size-5'>{text}</p>
      </div>
      <div className='column'>
        <img src={image} />
      </div>
    </div>
  </div>
)

Community.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Community
