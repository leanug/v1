import React from 'react'
import GitHub from './icons/GitHub'
import Netlify from './icons/Netlify'
import Gatsby from './icons/Gatsby'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper className="mb-20">
            <a href="https://github.com/leanug/v1">
                <GitHub />
                <span>Source</span> 
            </a>
            <a href="https://www.gatsbyjs.com">
                <Gatsby />
                <span>Built with Gatsby</span>
            
            </a>
            <a href="https://www.netlify.com">
                <Netlify />
                <span>Hosted on Netlify</span>
            </a>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    padding: 0 2rem;

    @media screen and ( min-width: 576px ) {
        display: flex;
        justify-content: center;

        a {
            margin: 0 1rem;
        }
    }

    span {
        margin-left: .5rem;
    }

    a {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        height: 3.9rem;
        padding: .5rem 0;
    }
`

export default Footer
