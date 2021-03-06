module.exports = {
  pathPrefix: "/gatsby-blog-tutorial",
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/contents/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-code-name",
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
  ],
}
