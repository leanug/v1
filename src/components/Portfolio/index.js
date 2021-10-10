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
                        quality: 75
                        height: 350
                        width: 580
                        placeholder: BLURRED
                    )
                }
            }
            placeholderImage2: file(relativePath: {eq: "projects/githubster.jpg"}) {
                childImageSharp {
                    gatsbyImageData (
                        quality: 75
                        height: 350
                        width: 580
                        placeholder: BLURRED
                    )
                }
            }
            placeholderImage3: file(relativePath: {eq: "projects/aerion.jpg"}) {
                childImageSharp {
                    gatsbyImageData (
                        quality: 75
                        height: 350
                        width: 580
                        placeholder: BLURRED
                    )
                }
            }
            placeholderImage4: file(relativePath: {eq: "projects/react-ui-components.jpg"}) {
                childImageSharp {
                    gatsbyImageData (
                        quality: 75
                        height: 350
                        width: 580
                        placeholder: BLURRED
                    )
                }
            }
            placeholderImage5: file(relativePath: {eq: "projects/random-user.jpg"}) {
                childImageSharp {
                    gatsbyImageData (
                        quality: 75
                        height: 350
                        width: 580
                        placeholder: BLURRED
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

    @media screen and ( min-width: 992px ) {
        grid-template-columns: repeat( 3, 1fr);
    }
`

export default Portfolio