import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout/layout';
import blogStyles from './blog.module.scss';
import Head from "../../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort: {fields: publishedDate, order: DESC } ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <div className={blogStyles.blogPageContainer}>
        <h1 className={blogStyles.blogPageTitle}>BLOG</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={blogStyles.post} key={edge.node.title}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage;