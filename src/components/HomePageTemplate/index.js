import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Mission from '../Mission'
import WhatWeDo from '../WhatWeDo'
import Quote from '../Quote'
import ForStudents from '../ForStudents'

const HomePageTemplate = ({ title, subtitle, heading, subheading, hero_image, mission, what_we_do, quote, for_students }) => (
  <Fragment>
    <div className='section hero is-fullheight-with-navbar' style={{ backgroundImage: `url(${hero_image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', backgroundSize: 'cover' }}>
      {/* Hero Section */}
      {/* <div className='section hero is-fullheight-with-navbar is-paddingless is-marginless' style={{ position: 'relative', top: 0, left: 0, backgroundImage: `url(${hero_image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top left', backgroundSize: 'cover' }}>
      <div className='overlay' /> */}

      {/* <div className='hero-head'> */}
      <div className='section hero-head is-paddingless is-marginless' style={{ backgroundImage: `url(${hero_image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
        <div className='overlay' />

        {/* <img src={hero_image} style={{ position: 'absolute', top: 0, left: 0 }} /> */}
        {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#7a7a7a', opacity: 0.80 }} /> */}
      </div>

      <div className='hero-body'>{/* Hero middle text */}
        {/* <div className='container'> */}
        <div className='columns is-centered'>
          <div className='column  is-three-quarters has-text-centered'>
            <p className='title has-text-white is-size-1' style={{ width: '100%' }}>{subtitle}</p>
          </div>
        </div>
      </div>
      <div className='hero-foot'>
        <div className='columns is-centered'>
          <div className='column is-2 is-offset-1 has-text-centered'>
            <div className='is-REAP-orange has-text-white is-size-4' style={{ position: 'relative', top: -100, width: 200 }}>
                  watch our documentary
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
    {/* Mission Section */}
    <div className='section is-gapless is-marginless is-REAP-orange has-text-white' style={{ position: 'relative', top: 0, left: 0 }}>
      <Mission image={mission.image} heading={mission.heading} text={mission.text} />
    </div>
    {/* What We Do section */}
    <div className='section is-gapless is-marginless'>
      <WhatWeDo heading={what_we_do.heading} actions={what_we_do.action} />
    </div>
    {/* Quote Section */}
    <div className='section is-gapless is-marginless is-REAP-gray'>
      <Quote text={quote.text} cite={quote.cite} />
    </div>
    {/* For Students Section */}
    <div className='section'>
      <ForStudents heading={for_students.heading} cards={for_students.cards.content} />
    </div>
  </Fragment>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  hero_image: PropTypes.string,
  mission: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
  }),
  what_we_do: PropTypes.shape({
    heading: PropTypes.string,
    action: PropTypes.array,
  }),
  quote: PropTypes.shape({
    text: PropTypes.string,
    cite: PropTypes.string,
  }),
  for_students: PropTypes.shape({
    heading: PropTypes.string,
    cards: PropTypes.shape({
      content: PropTypes.array,
    }),
  }),
}

export default HomePageTemplate
