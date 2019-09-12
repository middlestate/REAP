import React, { Component } from 'react'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js'
import PropTypes from 'prop-types'

// const carousels = bulmaCarousel.attach('.carousel', {
//   slidesToScroll: 1,
//   slidesToShow: 1,
//   loop: true,
// })

class Carousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideLeft: true,
    }
    this.handleSlide = this.handleSlide.bind(this)
  }

  handleSlide (e) {
    e.target.id === 'prev' ? this.carousels.prev() : this.carousels.next()
  }

  componentDidMount () {
    const carousels = bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
    })
  }

  render () {
    const { heading, cards } = this.props
    return (
      <div className='columns is-centered is-multiline'>
        <div className='column is-half has-text-centered'>
          <h1 className='is-size-1 has-text-REAP-gray'>{heading}</h1>
        </div>
        <div
          className='column is-three-quarters is-offset-5'
          style={{ overflow: 'hidden' }}>
          <div className='carousel' id='carousel'>
            {cards.map(({ title, text }, keys) => (
              <div key={keys} className={`item-${keys + 1}`}>
                <div className='card' style={{ width: '50%' }}>
                  <header className='card-header'>
                    <p
                      className='card-header-title has-text-REAP-orange is-size-3'
                      style={{ flex: 1, justifyContent: 'center' }}>
                      {title}
                    </p>
                  </header>
                  <div className='card-content' style={{ margin: 20 }}>
                    <div className='content'>
                      <span style={{ padding: 20, margin: 20 }}>{text}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

Carousel.propTypes = {
  heading: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Carousel
