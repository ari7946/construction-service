import React from "react";
import { graphql, Link } from "gatsby";

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
  // console.log('project', props.data.allContentfulProjects.edges.node)
  return (
    <Layout>
      <Head title={project.name} />
      <h1 className={projectStyles.projectsTitleContainer}>
        <Link to="/projects">
          Projects
        </Link>
        <span>{project.name}</span>
      </h1>

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
