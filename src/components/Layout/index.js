import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import config from '../../../config'
// import NavBar from '../NavBar'
import Footer from '../Footer'
import '../../assets/sass/styles.sass'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons'

library.add(faLink, faEnvelope, faMapMarkerAlt, fab)

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    return (
      <Fragment>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
        {/* <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} /> */}
        <Fragment>{this.props.children}</Fragment>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
