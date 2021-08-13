import React from 'react'
import AnimatedLink from '../AnimatedLink'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Displays a single post card
 * 
 * @param { string } excerpt
 * @param { object } frontmatter
 */
const Post = ({ excerpt, frontmatter }) => {
    const { title, image, slug } = frontmatter
    const img = getImage( image )
  
    return (
      <Wrapper>
          <Link to={`/blog/${ slug }`} className="shadow img-hover-zoom">
            <GatsbyImage imgClassName="img" image={ img } alt={ title } />
          </Link>
          <div className="mt-20">
            <Link to={`/blog/${ slug }`}>
              <h5>{ title }</h5>
            </Link>
            <p className="mb-10">{ excerpt }</p>
            <AnimatedLink url={`/blog/${ slug }`} text="Read more" />
          </div>
      </Wrapper>
    )
} 
  
const Wrapper = styled.article`
    border-radius: var(--border-radius-beta);
  
    a,
    a:hover {
      color: ${({ theme }) => theme.colorPsi };
    }
  
    .img {
      border-radius: var(--border-radius-beta);
    }
    .shadow {
      box-shadow: ${({ theme }) => theme.shadow};
    }
    /* Excerpt */
    p {
      font-size: 1.4rem;
      margin-top: 1rem;
    }

    /* Image zoom hover effect */
    .img-hover-zoom {
        border-radius: var(--border-radius-beta);
        /* [1.1] Set it as per your need */
        overflow: hidden; /* [1.2] Hide the overflowing of child elements */
        width: 100%;
    }

    /* [2] Transition property for smooth transformation of images */
    .img-hover-zoom img {
        transition: transform .5s ease;
    }

    /* [3] Finally, transforming the image when container gets hovered */
    .img-hover-zoom:hover img {
        transform: scale(1.1);
    }
`
  
Post.propTypes = {
    excerpt: PropTypes.string.isRequired,
    frontmatter: PropTypes.object.isRequired
};
  
export default Post