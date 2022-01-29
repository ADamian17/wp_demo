const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanet: true });

  const template = path.resolve(`src/templates/page.js`);

  const { data } = await graphql(`
  {
    allWpPage {
      edges {
        node {
          id
          title
          slug
          template {
            ... on WpDefaultTemplate {
              templateName
              modalTrigger {
                triggerId
              }
            }
          }
        }
      }
    }
  }
  `);

  data.allWpPage.edges.forEach(edge => {
    const {title, slug} = edge.node;

    createPage({
      path: `${slug}`,
      component: template,
      context: {
        ...edge.node
      }
    })
  });
};
