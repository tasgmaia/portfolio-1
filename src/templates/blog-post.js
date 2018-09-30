import React from 'react'
import Helmet from 'react-helmet'
import { Link,graphql } from 'gatsby'

import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const readingTime = post.fields.readingTime; 

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title}`}
        />

        {/* Cover image */}
        <div className="flex flex-row-ns flex-column mb4">
          <div className="w-10-ns">
          </div>

          <div className="w-80-ns">
            <div className="bg-gray h5 w-100">
            </div>
          </div>
        </div>
        
        {/* Heading */}
        <div className="flex flex-row-ns flex-column mb4">
          <div className="w-20-ns">
          </div>

          <div className="w-40-ns">
            <h1 className="f2 fw9 dark-gray lh-title">
              {post.frontmatter.title}
            </h1>

            <div className="f5 gray">
              <div>
                {post.frontmatter.date}
              </div> 
              <div>
                {readingTime.text}
              </div> 
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-row-ns flex-column">
          <div className="w-40-ns">
          </div>
  
          <div className="w-40-ns">
            <div 
              className="f4 lh-copy"
              dangerouslySetInnerHTML={{ __html: post.html }}
            /> 
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex flex-row-ns flex-column mv6">
          <div className="w-10-ns">
          </div>

          <div className="w-80-ns">
            <hr />

            <div className="flex flex-row justify-between mt4">
              <div>
                {
                  previous &&
                  <Link className="link pretty-link dim" to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                }
              </div> 
              <div>
                {
                  next &&
                  <Link className="link pretty-link dim" to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
              </Link>
                }
              </div>
            </div>
          </div>
        </div>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
