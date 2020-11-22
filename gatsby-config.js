require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'spore-and-sprout',
        accessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN,
        apiVersion: '2020-01',
        verbose: false,
        includeCollections: ['shop'],
      }
    }
  ]
}