import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        hero_image={frontmatter.hero_image}
        mission={frontmatter.mission}
        what_we_do={frontmatter.what_we_do}
        quote={frontmatter.quote}
        for_students={frontmatter.for_students}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        heading
        subheading
        hero_image
        mission {
          image
          heading
          text
        }
        what_we_do {
          heading
          action {
            image
            heading
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
