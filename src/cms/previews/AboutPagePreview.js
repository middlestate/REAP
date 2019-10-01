import React from 'react'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../../components/AboutPageTemplate'

const AboutPagePreview = ({ entry, getAsset }) => {
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      our_youth={{
        video: entry.getIn(['data', 'our_youth', 'video']),
        heading: entry.getIn(['data', 'our_youth', 'heading']),
        text: entry.getIn(['data', 'our_youth', 'text']),
      }}
      our_communities={{
        image: entry.getIn(['data', 'our_communities', 'image']),
        heading: entry.getIn(['data', 'our_communities', 'heading']),
        text: entry.getIn(['data', 'our_communities', 'text']),
      }}
      quote={{
        text: entry.getIn(['data', 'quote', 'text']),
        cite: entry.getIn(['data', 'quote', 'cite']),
      }}
      by_numbers={{
        heading: entry.getIn(['data', 'by_numbers', 'heading']),
        action: entry.getIn(['data', 'by_numbers', 'action']),
      }}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview
