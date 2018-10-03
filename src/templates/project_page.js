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

    post.html = post.html.replace(/<h1>/g,`<h1 class='f1 fw1 mt6 mb4'>`);
    post.html = post.html.replace(/<h2>/g,`<h2 class='f3 fw9 mt5 mb3'>`); 
    post.html = post.html.replace(/<hr>/g,`<hr class="mv6 bb b--black-10">`); 
    // post.html = post.html.replace(/<img class="/g,`<img class="mv6 `);

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
              {
                post.frontmatter.tags && 
                  <div className="mt2">
                    {post.frontmatter.tags.map(tag => (
                      <span className="br2 bg-near-white dark-gray f7 mr2 pa1">
                        {tag}
                      </span>
                    ))}
                  </div>
              }
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-row-ns flex-column">
          <div className="w-20-ns">
          </div>
  
          <div className="w-60-ns">
            <div 
              className="f4 near-black lh-copy"
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
        date2(formatString: "MMMM, YYYY")
        tags
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`