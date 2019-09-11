import React, { Fragment } from 'react'
import { PropTypes } from 'prop-types'
import Mission from '../Mission'
import Quote from '../Quote'
import WhatWeDo from '../WhatWeDo'
import Carousel from '../Carousel'

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
    <div className='section is-gapless is-marginless has-text-REAP-gray'>
      {/* Culture Section */}
      <Mission image={culture.video} heading={culture.heading} text={culture.text} />
    </div>
    <div className='section'>
      {/* At A Glance Section */}
      <WhatWeDo heading={glance.heading} actions={glance.action} />
    </div>
    <div className='section is-gapless is-marginless is-REAP-gray'>
      {/* Quote Section */}
      <Quote text={quote.text} cite={quote.cite} />
    </div>
    <div className='section'>
      {/* Pathway Section */}
      <Carousel heading={pathway.heading} cards={pathway.carousel.cards} />
    </div>
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
    action: PropTypes.array,
  }),
  quote: PropTypes.shape({
    text: PropTypes.string,
    cite: PropTypes.string,
  }),
  pathway: PropTypes.shape({
    heading: PropTypes.string,
    carousel: PropTypes.shape({
      cards: PropTypes.array,
    }),
  }),
}

export default ProgramPage
