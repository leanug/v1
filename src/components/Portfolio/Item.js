import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import styled from 'styled-components'

const Item = ({ categories, title, image, text, live, git }) => {
    const img = getImage( image )
    const categoriesAry = categories.split(',')

    return (
        <Wrapper>
            { image && 
                <a className="link-img" href={ live }>
                    <GatsbyImage imgClassName="img" image={ img } alt={ title } />
                </a>
            }
            <div className="container">
                <a href={ live }>
                    <h3 className="mb-10">{ title }</h3>
                </a>
                <div>
                    { categoriesAry.map(( cat, index ) => (
                        <span className="category" key={ index }>{ cat }</span>
                    ))}
                </div>
                <p className="mt-10">{ text }</p>
                <div className="links">
                    { live && <a className="link" href={ live }><FaExternalLinkAlt /><span>live site</span></a> }
                    { git && <a className="link" href={ git }><FaGithub /><span>github</span></a> }
                </div>
            </div>
        </Wrapper>
    )
} 
  
const Wrapper = styled.article`
    align-items: flex-start;
    height: 100%;
    width: 100%;

    .img {
        border-radius: var(--radius-alpha);
        filter: grayscale(100%);
        transition: filter 0.25s linear;

        &:hover {
            filter: grayscale(0);
        }
    }

    .link-img {       
        display: inline-block;
        margin-bottom: 3rem;
 
        @media screen and ( min-width: 920px ) {
            margin-bottom: 6rem;
        }
    }

    .category {
        text-transform: capitalize;
        margin-right: 2rem;
        height: 100%;
        width: 100%;
    }
    
    span {
        font-size: 1.4rem;
    }

    .link {
        display: flex;
        align-items: center;

        span {
            margin-left: 1rem;
        }
    }

    .links {
        display: flex;
        align-items: center;
        margin-top: 2rem;
        align-self: baseline;

        a {
            margin-right: 2rem;
        }
    }

    .container {
        display: flex;
        flex-direction: column;
    }

    .icon {
        font-size: 2.5rem;
        margin-left: 0.8rem;
        position: relative;
        right: 0;
        transition: right linear 0.25s;
    }
`
  
export default Item