import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AboutPage from '../components/AboutPageTemplate'
import Layout from '../components/Layout'

const About = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <AboutPage
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        our_youth={frontmatter.our_youth}
        our_communities={frontmatter.our_communities}
        quote={frontmatter.quote}
        by_numbers={frontmatter.by_numbers}
      />
    </Layout>
  )
}

About.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default About

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        heading
        subheading
        our_youth {
          video
          heading
          text
        }
        our_communities {
          image
          heading
          text
        }
        quote {
          text
          cite
        }
        by_numbers {
          action {
            image
            number
            text
          }
        }
      }
    }
  }
`
