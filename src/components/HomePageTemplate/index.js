import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const HomePage = ({ title, heading, subheading, mission, what_we_do, quote, for_students }) => (
  <Fragment>
    {/* Hero Section */}
    <div className='section hero'>
      <div className='hero-body'>{/* Hero middle text */}</div>
    </div>
    <div className='section'>{/* Mission Section */}</div>
    <div className='section'>{/* What We Do Section */}</div>
    <div className='section'>{/* Quote Section */}</div>
    <div className='section'>{/* For Students Section */}</div>
  </Fragment>
)

HomePage.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mission: PropTypes.shape({
    image: PropTypes.string,
    text: PropTypes.string,
  }),
  what_we_do: PropTypes.shape({
    action: PropTypes.array,
  }),
  quote: PropTypes.shape({
    text: PropTypes.string,
    cite: PropTypes.string,
  }),
  for_students: PropTypes.shape({
    heading: PropTypes.string,
    cards: PropTypes.array,
  }),
}

export default HomePage
