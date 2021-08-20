import React from 'react'
import Item from './Item'
import styled from 'styled-components'
import projects from '../../constants/portfolio'
import { useStaticQuery, graphql } from "gatsby"

const Portfolio = () => {
    const images = useStaticQuery(graphql`
        query HeaderQuery {
            placeholderImage1: file(relativePath: {eq: "projects/movienation.jpg"}) {
                childImageSharp {
                    gatsbyImageData (
                        quality: 100
                        height: 350
                        width: 580
                        transformOptions: {fit: COVER}
                    )
                }
            }
            placeholderImage2: file(relativePath: {eq: "projects/githubster.jpg"}) {
                childImageSharp {
                    gatsbyImageData (
                        quality: 100
                        height: 350
                        width: 580
                        transformOptions: {fit: COVER}
                    )
                }
            }
            placeholderImage3: file(relativePath: {eq: "projects/distrial.jpg"}) {
                childImageSharp {
                    gatsbyImageData (
                        quality: 100
                        height: 350
                        width: 580
                        transformOptions: {fit: COVER}
                    )
                }
            }
        }
    `)

    const imagesAry = Object.values( images )
    projects.forEach(( project, index ) => {
      const { childImageSharp: { gatsbyImageData: image } = {} } = imagesAry[ index ]
      project.image = image
    })

    return (
      <Wrapper>
        { projects.map(( project, index )  => {
            return <Item key={ index } { ...project } />
        })}
      </Wrapper>
    )
  }

const Wrapper = styled.div`
    display: grid;
    grid-gap: 8rem;
    grid-template-columns: repeat( auto-fit, minmax( 28rem, 1fr ));
    margin-top: 6rem;
`

export default Portfolio