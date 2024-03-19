/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `CooolTiger's Gallery`,
    author: 'Danny He, Grant He'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`, // 名称，可以用来过滤
        path: `${__dirname}/src/content`, // 文件路径
      },
    },
    'gatsby-transformer-remark',
  ],
}