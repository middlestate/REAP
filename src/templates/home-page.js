import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePage from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const Home = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <HomePage
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mission={frontmatter.mission}
        what_we_do={frontmatter.what_we_do}
        quote={frontmatter.quote}
        for_students={frontmatter.for_students}
      />
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Home

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        heading
        subheading
        mission {
          image
          text
        }
        what_we_do {
          action {
            image
            text
          }
        }
        quote {
          text
          cite
        }
        for_students {
          heading
          cards {
            content {
              title
              text
            }
          }
        }
      }
    }
  }
`
