import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Home from '../components/icons/Home'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PropTypes from 'prop-types'
import Seo from "../components/SEO"
import styled from 'styled-components'

const PostTemplate = ({ data }) => {
  console.log(data);
  const { 
    mdx: { 
      frontmatter: {
        excerpt,
        live,
        github,
        title
      },
      body,
    }, 
  } = data
  
  return (
    <>
      <Seo 
        title={ title }
      />
      <Wrapper>
        <header>
          <div>
            <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
              <Home /><div style={{ marginLeft: '1rem', marginBottom: '.1rem' }}>Home</div>
            </Link>
          </div>
          <h1 style={{ marginBottom: 0 }} className="display-three">{ title }</h1>
          <div className="links">
            { live && <a className="link" href={ live }><span>Live site</span></a> }
            { github && <a className="link" href={ github }><span>Github</span></a> }
          </div>
          <h2 style={{ marginTop: '1rem' }}>{ excerpt }</h2>
         
        </header>
        <MDXRenderer>{ body }</MDXRenderer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.article`
  max-width: var(--content-width);
  margin: 6rem auto;
  width: 100%;

  .header-info {
    align-items: center;
    color: var(--clr-beta);
    display: flex;
    font-size: var(--font-small);
    margin-bottom: 1.2rem;
  }

  .breadcrumbs {
    align-items: center;
    display: flex;
    font-size: var(--font-small);

    a {
      color: var(--clr-beta);
    }
  }

  h1 {
    margin-bottom: 1.2rem;
  }

  .links {
      display: flex;
      align-items: center;
      
      align-self: baseline;

      a {
          margin-right: 2rem;
      }
  }

  img {
    border-radius: var(--radius-alpha);
  }

  .author-img {
    border-radius: 50%;
  }

  & > *:not(:last-child) {
    margin-bottom: 2.5rem;
    width: 100%;
  }

  a {
    color: var(--clr-psi);
    text-decoration: underline;

    &:hover {
      color: var(--clr-alpha);
      text-decoration: none;
    }
  }

  ol, ul {
    margin-left: 2rem;
  }

  blockquote {
    border-left: .6rem solid var(--clr-alpha);
    padding: 0 2rem;
  }

  .author {
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  pre {
    overflow-x: auto;
  }
`

export const query = graphql`
  query GetSingleProject ($slug: String){
    mdx( frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        category
        excerpt
        github
        live
        tags
        title
      }
      body
    }
  }
`

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostTemplate
