import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ContactPage = ({ title, image, heading }) => (
  <Fragment>
    <div className='section'>{/* Form */}</div>
  </Fragment>
)

ContactPage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  heading: PropTypes.string,
}

export default ContactPage
