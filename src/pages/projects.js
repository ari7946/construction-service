import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Head from "../components/head"
import ProjectsGrid from '../components/projects-grid/projects-grid'
import projectStyles from './projects-page.module.scss'

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
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

  const getAllProjectImages = () => {
    return data.allContentfulProjects.edges.map(({ node }) => {
      return node.media.map(({ file }) => {
        return file.url
      })
    }).flat();
  }

  const allRandomProjectImages = getAllProjectImages().sort( () => .5 - Math.random() );

  return (
    <Layout>
      <Head title="Projects" />
      <div className={projectStyles.projectsContainer}>
        <div className={projectStyles.projectsMenu}>
          {data.allContentfulProjects.edges.map(({ node }) => {
            let slug = slugify(node.name);
            return (
              <Link to={`${slug}`}>
                <h2 className={projectStyles.menuTitle}>{node.name}</h2>
              </Link>
            )
          })}
        </div>

        <ProjectsGrid images={allRandomProjectImages} />
      </div>
    </Layout>
  )
}

export default ProjectsPage;