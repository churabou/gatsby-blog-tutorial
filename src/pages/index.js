import React from "react"
import { graphql, Link } from "gatsby"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date(formatString: "YYYY年MM月DD日")
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  return (
    <div>
      <h1>全ての記事</h1>
      <ul>
        {edges.map((edge) => (
          <li key={edge.node.id}>
            <Link to={edge.node.id}>
              <div>
                {edge.node.frontmatter.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div>{edge.node.frontmatter.title}</div>
              <div>{edge.node.frontmatter.date}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
