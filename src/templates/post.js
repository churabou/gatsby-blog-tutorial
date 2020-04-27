import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const pageQuery = graphql`
  query markdown($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tags
        date(formatString: "YYYY年MM月DD日")
      }
    }
  }
`

const Body = styled.div`
  background: #f4f4f4;
  padding: 2em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  word-wrap: break-word;
  > article {
    width: 60%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    background: white;
    border-radius: 2px;
    padding: 1.5em;
    margin-bottom: 1.5em;

    div:last-child {
      img {
        max-width: 100%;
      }
      a {
        color: var(--theme-color);
        text-decoration: none;
      }
    }
  }
  .frontmatter {
    &.tag {
      display: inline-block;
      background: var(--theme-color);
      color: white;
      margin: 0 0.25em 0.25em 0;
      padding: 0.25em;
    }
    &.date {
      margin-top: 0.5em;
      color: #666;
    }
  }
`
export default ({ data }) => {
  const html = data.markdownRemark.html
  const { title, tags, date } = data.markdownRemark.frontmatter
  return (
    <React.Fragment>
      <Header />
      <Body>
        <article>
          <h1>{title}</h1>
          <div>
            {tags.map((tag) => (
              <span key={tag} className="frontmatter tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="frontmatter date">
            <b>{date}</b>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Body>
      <Footer />
    </React.Fragment>
  )
}
