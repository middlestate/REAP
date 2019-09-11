import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ProgramPageTemplate from '../components/ProgramPageTemplate'
import Layout from '../components/Layout'

const ProgramPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <ProgramPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        culture={frontmatter.culture}
        glance={frontmatter.glance}
        quote={frontmatter.quote}
        pathway={frontmatter.pathway}
      />
    </Layout>
  )
}

ProgramPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProgramPage

export const pageQuery = graphql`
  query ProgramPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        heading
        subheading
        culture {
          video
          heading
          text
        }
        glance {
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
        pathway {
          heading
          carousel {
            cards {
              title
              text
            }
          }
        }
      }
    }
  }
`
