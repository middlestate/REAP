import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

// const carousels = bulmaCarousel.attach('.carousel', {
//   slidesToScroll: 1,
//   slidesToShow: 1,
//   loop: true,
// })
const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, height: 20, width: 20, paddingTop: 2, display: 'block', background: 'black', borderRadius: 25 }}
    onClick={onClick}
  />
)

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, height: 20, width: 20, paddingTop: 2, display: 'block', background: 'black', borderRadius: 25 }}
    onClick={onClick}
  />
)

const settings = {
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  speed: 1000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
}

const Carousel = ({ heading, cards }) => (
  <Fragment>
    <div className='columns is-centered '>
      <div className='column is-half has-text-centered'>
        <h1 className='is-size-1 has-text-REAP-gray'>{heading}</h1>
      </div>
    </div>
    <div className='columns is-centered'>
      <div className='column is-4'>
        <Slider {...settings}>
          {cards.map(({ title, text }, keys) => (
            <div key={keys} className={`item-${keys + 1}`}>
              <div className='card is-borderless is-shadowless'>
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
        </Slider>
      </div>
    </div>
  </Fragment>
)

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
