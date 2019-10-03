import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Mission from '../Mission'
import Community from '../Communities'
import Quote from '../Quote'
import WhatWeDo from '../WhatWeDo'

const AboutPage = ({ title, subtitle, heading, subheading, our_youth, our_communities, quote, by_numbers }) => (
  <Fragment>
    {/* About Hero Section */}
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
    {/* Our Youth */}
    <div className='section is-gapless is-marginless has-text-REAP-gray' style={{ position: 'relative', top: 0, left: 0 }}>
      <Mission image={our_youth.video} heading={our_youth.heading} text={our_youth.text} />
    </div>
    <div className='section is-gapless is-marginless has-text-REAP-gray is-REAP-light-gray' >
      {/* Our Communities */}
      <Community image={our_communities.image} heading={our_communities.heading} text={our_communities.text} />
    </div>
    <div className='section is-gapless is-marginless is-REAP-gray'>
      {/* Quote */}
      <Quote text={quote.text} cite={quote.cite} />
    </div>
    <div className='section'>
      {/* By The Numbers */}
      <WhatWeDo heading={by_numbers.heading} actions={by_numbers.action} />
    </div>
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
    heading: PropTypes.string,
    action: PropTypes.array,
  }),
}

export default AboutPage
