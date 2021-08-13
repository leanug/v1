import React from 'react'
import Post from './Post'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Displays a list of blog posts
 * 
 * @param { array } posts [ excerpt, id, frontmatter ]
 */
const Posts = ({ posts }) => {
  return (
    <Wrapper>
      { posts.map( post  => {
          return <Post key={ post.id } { ...post } />
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat( auto-fit, minmax( 22rem, 1fr ));

    @media screen and ( min-width: 576px ) {
      grid-template-columns: repeat( 2, 1fr );
    }

    @media screen and ( min-width: 992px ) {
      grid-template-columns: repeat( 3, 1fr );
    }
`

Posts.propTypes = {
  posts: PropTypes.array
};

export default Posts
