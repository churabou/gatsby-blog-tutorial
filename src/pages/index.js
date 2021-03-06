import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

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

const Body = styled.div`
  padding: 2em;
  ul {
    list-style: none;
    padding: 0px;
  }
  li {
    padding: 1em;
    margin-bottom: 1em;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    div {
      padding: 0.25em;
    }
    span {
      display: inline-block;
      padding: 0.25em;
      background: var(--theme-color);
      color: white;
      margin: 0 0.25em 0.25em 0;
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
`

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  return (
    <React.Fragment>
      <Header />
      <Body>
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
      </Body>
      <Footer />
    </React.Fragment>
  )
}
