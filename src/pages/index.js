import * as React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  return (
    <Layout pageTitle={data.site.siteMetadata.title}>
      <Header />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}


export const Head = () => <title>CooolTiger's Gallery</title>

export default IndexPage
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