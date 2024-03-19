import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'

const AboutPage = ({ data }) => {
  console.log(data.site.siteMetadata.title)
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <div>
        <h1>Title: {data.site.siteMetadata.title}</h1>
        <p>author: {data.site.siteMetadata.author}</p>
        <div>about me</div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage
export const query = graphql`
query {
  site {
    siteMetadata {
      title
      author
    }
  }
}
`