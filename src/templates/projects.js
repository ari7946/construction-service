import React from "react";
import { graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons"

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
      <div className={projectStyles.projectsTitleContainer}>
        <h3 className={projectStyles.back}>
          <Link to="/projects">
          <FontAwesomeIcon icon={faChevronLeft} />{" "}PROJECTS
          </Link>
        </h3>
        <h1 className={projectStyles.projectName}>{project.name}</h1>
      </div>

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
