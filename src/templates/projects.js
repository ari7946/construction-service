import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import Head from "../components/head";

export const query = graphql`
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
`

const Projects = props => {
  console.log("props", props)
  let project = props.pageContext.node;
  return (
    <Layout>
      <Head title={project.name} />
      <h1>{project.name}</h1>
      {project.media.map(({ file }) => {
        return (
          <div>
            <p>file name: {file.fileName}</p>
            <p>URL: {file.url}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default Projects;
