import React from "react"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query markdown($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "YYYY年MM月DD日")
      }
    }
  }
`

export default ({ data }) => {
  const html = data.markdownRemark.html
  const { title, tags, date } = data.markdownRemark.frontmatter
  return (
    <div>
      <article>
        <h1>{title}</h1>
        <div>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div>{date}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  )
}
