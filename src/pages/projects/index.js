import React, { useEffect, useMemo } from "react"
import { Link } from "gatsby"
import { slugify } from "../../utils"

import Layout from "../../components/layout/layout"
import Head from "../../components/head"
import ProjectsGrid from "../../components/projects-grid/projects-grid"
import projectStyles from "./projects-page.module.scss"
import { useProjectPageData } from "../../custom-hooks/useProjectPageData"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectsPage = () => {
  const data = useProjectPageData()

  const getAllProjectImages = () => {
    return data.allContentfulProjects.edges
      .map(({ node }) => {
        return node.media.map(({ file }) => {
          return file.url
        })
      })
      .flat()
  }

  const allRandomProjectImages = React.useMemo(
    () => getAllProjectImages().sort(() => 0.5 - Math.random()),
    [data.allContentfulProjects.edges]
  )

  return (
    <Layout>
      <Head
        title="Projects"
        description="Our projects include well-known establishments such as Las Brisas, Who Song & Larry's, Saint Bernard School Gym, El Torito Restaurant"
      />
      <div className={projectStyles.projectsContainer}>
        <div className={projectStyles.projectsMenu}>
          {data.allContentfulProjects.edges.map(({ node }) => {
            let slug = slugify(node.name)
            return (
              <AniLink to={`${slug}`} key={node.name} swipe>
                {node.name}
              </AniLink>
            )
          })}
        </div>
        <h3>All Projects</h3>
        <ProjectsGrid images={allRandomProjectImages} />
      </div>
    </Layout>
  )
}

export default ProjectsPage
