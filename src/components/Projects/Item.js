import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GitHub from '../icons/GitHub'
import { Link } from 'gatsby'
import LinkIcon from '../icons/Link'
import styled from 'styled-components'

const Item = ({ category, excerpt, image, live, github, slug, tags, title }) => {
    const img = getImage( image )
   
    return (
        <Wrapper>
            {image && 
                <Link className="link-img" to={ slug }>
                    <GatsbyImage 
                        imgClassName="img" 
                        image={ img } alt={ title }
                        loading="lazy"
                    />
                </Link>
            }
            <div style={{ marginTop: '1.2rem' }}>
                <span className="category">{ category }</span>
                <Link to={ slug }>
                    <h3>{ title }</h3>
                </Link>
                <div style={{ marginTop: '.5rem' }}>
                    {tags && tags.map(( tag, index ) => (
                        <span style={{ marginRight: '1rem' }} key={ index }>{ tag }</span>
                    ))}
                </div>
                <p className="mt-10">{ excerpt }</p>
                <div className="links">
                    { live && <a className="link" href={ live }><LinkIcon /><span>live site</span></a> }
                    { github && <a className="link" href={ github }><GitHub /><span>github</span></a> }
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
        -webkit-transition : -webkit-filter 0.25s linear;

        &:hover {
            filter: grayscale(0);
        }
    }

    .category {
        background-color: ${({ theme }) => theme.epsilon };
        border-radius: var(--radius-alpha);
        display: inline-block;
        font-size: var(--fs-small);
        margin: 1rem 0;
        padding: .8rem 1.6rem;
        text-transform: uppercase;
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

    .icon {
        font-size: 2.5rem;
        margin-left: 0.8rem;
        position: relative;
        right: 0;
        transition: right linear 0.25s;
    }
`
  
export default Item