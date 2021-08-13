import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
//import { BsArrowRightShort } from 'react-icons/bs'
//import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Displays a single portfolio card
 * 
 * @param { object } 
 */
const Item = ({ categories, title, image, text, live, git }) => {
    const img = getImage( image )
    const categoriesAry = categories.split(',')

    return (
        <Wrapper>
            { image && 
                <a href={ live }>
                    <GatsbyImage imgClassName="img" image={ img } alt={ title } />
                </a>
            }
            <div className="container">
                <a href={ live }>
                    <h3 className="mb-10">{ title }</h3>
                </a>
                { categoriesAry.map(( cat, index ) => (
                    <span className="category" key={ index }>{ cat }</span>
                ))}
                <p className="mt-10">{ text }</p>
                <div className="links">
                    { live && <a href={ live }>Live site</a> }
                    { git && <a href={ git }>GitHub</a> }
                </div>
            </div>
        </Wrapper>
    )
} 
  
const Wrapper = styled.article`
    border-radius: var(--radius-beta);
    position: relative;
    overflow: hidden;

    .container {
        margin-top: 2rem;
    }

    .img {
        border-radius: var(--radius-alpha);
        filter: grayscale(100%);
        transition: filter 0.25s linear;
        z-index: 0;

        &:hover {
            filter: grayscale(0);
        }
    }
    
    span {
        font-size: 1.4rem;
    }
    
    .category {
        text-transform: capitalize;
        margin-right: 2rem;
    }

    h4{ 
        color: ${({ theme }) => theme.colorOmegaFixed };
    }

    .links {
        display: flex;
        align-items: center;
        margin-top: 2rem;

        a {
            margin-right: 2rem;
        }
    }

    .icon {
        font-size: 2.5rem;
        margin-left: 0.8rem;
        position: relative;
        right: 0;
        transition: right linear 0.25s;
    }

    &:hover {
        .icon {
            right: -8px;
        }
    }
`
  
export default Item