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
                <div>
                    <Link className="red-hover-link" to={ slug }>
                        <h3>{ title }</h3>
                    </Link>
                </div>
                <div style={{ marginTop: '.5rem' }}>
                    {tags && tags.map(( tag, index ) => (
                        <span style={{ marginRight: '1rem' }} key={ index }>{ tag }</span>
                    ))}
                </div>
                <p className="mt-10">{ excerpt }</p>
                <div className="links">
                    { live && <a className="link red-hover-link" href={ live }><LinkIcon /><span>live site</span></a> }
                    { github && <a className="link red-hover-link" href={ github }><GitHub /><span>github</span></a> }
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
        text-transform: capitalize;
    }
    
    .red-hover-link {
        transition: color 0.3s;
    }

    .red-hover-link:hover {
        color: ${({ theme }) => theme.delta };
    }

    h3 {
        display: inline-block;
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