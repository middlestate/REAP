import React from 'react'
import PropTypes from 'prop-types'
import ProgramPageTemplate from '../../components/ProgramPageTemplate'

const ProgramPagePreview = ({ entry, getAsset }) => {
  const entryCards = entry.getIn(['data', 'pathway', 'carousel', 'cards'])
  const cards = entryCards ? entryCards.toJS() : []

  return (
    <ProgramPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      culture={{
        video: entry.getIn(['data', 'culture', 'video']),
        heading: entry.getIn(['data', 'culture', 'heading']),
        text: entry.getIn(['data', 'culture', 'text']),
      }}
      glance={{
        heading: entry.getIn(['data', 'glance', 'heading']),
        action: entry.getIn(['data', 'glance', 'action']),
      }}
      quote={{
        text: entry.getIn(['data', 'quote', 'text']),
        cite: entry.getIn(['data', 'quote', 'cit']),
      }}
      pathway={{
        heading: entry.getIn(['data', 'pathway', '']),
        carousel: { cards },
      }}
    />
  )
}

ProgramPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProgramPagePreview
