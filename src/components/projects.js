import React from 'react'
import { Link } from 'gatsby'

class Projects extends React.Component {
    render() {
        const posts = this.props.posts;

        return (
            posts.map(({ node }) => {
                return (
                    <Project node={node}/>
                )
            })
        )
    }
}

class Project extends React.Component {
    render() {
        const node = this.props.node;
        const title = node.frontmatter.title || node.fields.slug;

        return (
            <Link
                className="link near-black bg-white mv4 w-100 dim db pa4 shadow-4"
                to={node.fields.slug}
            >
                <h3 className="f4 fw5">
                    {title}
                </h3>
                <div className="f6 gray">
                    {node.frontmatter.date}
                </div>
                {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
            </Link>
        )
    }
}

export default Projects;