/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  // pathPrefix: "/.emacs.d",
  // pathPrefix:
  //   "/.emacs.d/Projects/Gatsby/Gatsby.js_Tutorial_N_Projects_Course/10a-Setup_New_Project/tutorial",
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`, // gatsby-plugin-image
    `gatsby-plugin-sharp`, // gatsby-plugin-image
    `gatsby-transformer-sharp`, // gatsby-plugin-image - Needed for dynamic images
  ],
}
