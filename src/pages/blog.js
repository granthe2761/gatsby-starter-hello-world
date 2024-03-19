import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Blog = ({ data }) => {
  return (
    <Layout>
      <h1>博客目录</h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div
              key={node.id}
              style={{
                border: '1px solid #000',
                margin: '10px',
                padding: '10px',
              }}
            >
              <h2>{node.frontmatter.title}</h2>
              <div>分类{node.frontmatter.categories}</div>
              <div>标签：{node.frontmatter.tags}</div>
              <div>发布时间：{node.frontmatter.date}</div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            tags
            title
            date
            categories
          }
        }
      }
    }
  }
`