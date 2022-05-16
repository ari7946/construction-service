import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout/layout"
import Head from "../components/head"
import ProjectsGrid from "../components/projects-grid/projects-grid"

import projectStyles from "./projects-template.module.scss"

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
  const project = props.pageContext.node
  const images = project.media.map(({ file }) => file.url)

  return (
    <Layout>
      <Head title={project.name} />
      <div className={projectStyles.projectsTemplateContainer}>
        <div className={projectStyles.projectsTitleWrapper}>
          <h3 className={projectStyles.back}>
            <AniLink fade to="/projects">
              <FontAwesomeIcon icon={faChevronLeft} /> PROJECTS
            </AniLink>
          </h3>
          <h1 className={projectStyles.projectName}>{project.name}</h1>
        </div>

        <ProjectsGrid images={images} />
      </div>
    </Layout>
  )
}

export default Projects
