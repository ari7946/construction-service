import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import Head from "../components/head";

import projectStyles from '../components/projects/projects.module.scss';

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
  let project = props.pageContext.node;
  return (
    <Layout>
      <Head title={project.name} />
      <h1>{project.name}</h1>
      <div className={projectStyles.projectGallery}>
      {project.media.map(({ file }) => {
        return (
          <div className={projectStyles.projectImageContainer}>
            <img className={projectStyles.projectImage} src={file.url} alt={project.name} />
          </div>
        )
      })}
      </div>
    </Layout>
  )
}

export default Projects;
