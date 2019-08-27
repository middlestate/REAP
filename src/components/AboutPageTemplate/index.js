import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const AboutPage = ({ title, subtitle, heading, subheading, our_youth, quote, by_numbers }) => (
  <Fragment>
    <div className='section'>{/* About Hero Section */}</div>
    <div className='section'>{/* Our Youth */}</div>
    <div className='section'>{/* Our Communities */}</div>
    <div className='section'>{/* Quote */}</div>
    <div className='section'>{/* By The Numbers */}</div>
  </Fragment>
)

AboutPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  our_youth: PropTypes.shape({
    video: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
  }),
  our_communities: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
  }),
  quote: PropTypes.shape({
    text: PropTypes.string,
    cite: PropTypes.string,
  }),
  by_numbers: PropTypes.shape({
    action: PropTypes.array,
  }),
}

export default AboutPage
