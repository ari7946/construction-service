const path = require('path');

// module.exports.onCreateNode = ({ node, actions}) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = path.basename(node.fileAbsolutePath, '.md')

//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }

// Creates Pages for Blog posts
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const projectsTemplate = path.resolve("./src/templates/projects.js")

  const queryBlogPosts = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const queryProjects = await graphql(`
    query {
      allContentfulProjects {
        edges {
          node {
            name
            media {
              file {
                fileName
                url
                contentType
              }
            }
          }
        }
      }
    }
  `)

  // https://gist.github.com/codeguy/6684588#gistcomment-3361909
  const slugify = text => {
    return text
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
  }

  // console.log(JSON.stringify(res.data.allContentfulProjects.edges, null, 4))
  queryProjects.data.allContentfulProjects.edges.forEach(edge => {
    console.log('edge', edge)
    let slug = slugify(edge.node.name)

    createPage({
      component: projectsTemplate,
      path: `/projects/${slug}`,
      context: {
        slug,
        node: edge.node,
      },
    })
  })

  queryBlogPosts.data.allContentfulBlogPost.edges.forEach(edge => {
    // 1. Get path to template
    // 2. Get markdown data
    // 3. create new pages
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

