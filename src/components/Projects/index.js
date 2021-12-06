import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const Portfolio = ({ projects }) => {
  return (
    <Wrapper>
      {projects.map((project, index) => {
        const { 
          category, 
          excerpt,
          image, 
          live, 
          github,
          slug,
          tags, 
          text, 
          title 
        } = project.frontmatter

        return (
          <Item 
              key={ index } 
              category={ category }
              excerpt={ excerpt }
              image={ image }
              live={ live }
              github={ github }
              slug={ slug }
              tags={ tags }
              text={ text }
              title={ title }
          />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    grid-gap: 8rem;
    grid-template-columns: repeat( auto-fit, minmax( 28rem, 1fr ));
    margin-top: 6rem;

    @media screen and ( min-width: 992px ) {
        grid-template-columns: repeat( 3, 1fr);
    }
`

export default Portfolio