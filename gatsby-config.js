/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/hahow-for-business-maintenance-page",
  plugins: [
    {
      resolve: "gatsby-plugin-intercom-spa",
      options: {
        app_id: "cjhsnczh",
        include_in_development: true,
        delay_timeout: 0,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}
