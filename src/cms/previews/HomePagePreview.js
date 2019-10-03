import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'

const HomePagePreview = ({ entry, getAsset }) => {
  const entryContent = entry.getIn(['data', 'for_students', 'cards', 'content'])
  const content = entryContent ? entryContent.toJS() : []
  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      hero_image={entry.getIn(['data', 'hero_image'])}
      mission={{
        image: entry.getIn(['data', 'mission', 'image']),
        heading: entry.getIn(['data', 'mission', 'heading']),
        text: entry.getIn(['data', 'mission', 'text']),
      }}
      what_we_do={{
        heading: entry.getIn(['data', 'what_we_do', 'heading']),
        action: entry.getIn(['data', 'what_we_do', 'action']),
      }}
      quote={{
        text: entry.getIn(['data', 'quote', 'text']),
        cite: entry.getIn(['data', 'quote', 'cite']),
      }}
      for_students={{
        heading: entry.getIn(['data', 'for_students', 'heading']),
        cards: { content },
      }}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
