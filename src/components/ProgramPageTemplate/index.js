import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'

const ProgramPage = ({ title, subtitle, heading, subheading, culture, glance, quote, pathway }) => (
  <Fragment>
    <div className='section'>
      {/* Hero Section */}
      <div className='section hero is-medium is-REAP-orange'>
        <div className='hero-head' />
        <div className='hero-body'>
          <div className='columns'>
            <div className='column is-4 is-offset-2'>
              <div className='title has-text-white is-size-1'>{subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='section'>{/* Culture Section */}</div>
    <div className='section'>{/* At A Glance Section */}</div>
    <div className='section'>{/* Quote Section */}</div>
    <div className='section'>{/* Pathway Section */}</div>
  </Fragment>
)

ProgramPage.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  culture: PropTypes.shape({
    video: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
  }),
  glance: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  quote: PropTypes.shape({
    text: PropTypes.string,
    cite: PropTypes.string,
  }),
  pathway: PropTypes.shape({
    heading: PropTypes.string,
    carousel: PropTypes.object,
  }),
}

export default ProgramPage
