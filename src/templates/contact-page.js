import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ContactPage from '../components/ContactPageTemplate'
import Layout from '../components/Layout'

const Contact = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <ContactPage title={frontmatter.title} image={frontmatter.image} heading={frontmatter.heading} />
    </Layout>
  )
}

Contact.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Contact

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
      }
    }
  }
`
