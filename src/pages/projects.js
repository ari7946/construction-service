import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Head from "../components/head"

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
  console.log('data',data)
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

  return (
    <Layout>
      <Head title="Projects" />
      <h1>Projects</h1>
      {data.allContentfulProjects.edges.map(({ node }) => {
        let slug = slugify(node.name);
        return (
          <Link to={`/projects/${slug}`}>
            <h2>{node.name}</h2>
          </Link>
        )
      })}
    </Layout>
  )
}

export default ProjectsPage;