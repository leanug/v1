import React from 'react'
import styled from 'styled-components'
import { SiGithub, SiGatsby, SiNetlify } from 'react-icons/si'

const Footer = () => {
    return (
        <Wrapper className="mb-20">
            <span>
                <a href="https://github.com/leanug/v1"><SiGithub className="icon" />Source</a>
            </span>
            <span>
                <a href="https://www.gatsbyjs.com"><SiGatsby className="icon" />Built with Gatsby</a>
            </span>
            <span>
                <a href="https://www.netlify.com"><SiNetlify className="icon" />Hosted on Netlify</a>
            </span>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    padding: 0 2rem;

    @media screen and ( min-width: 576px ) {
        display: flex;
        justify-content: center;
    }

    span {
        margin: 0 2rem;
    }

    a {
        display: flex;
        align-items: center;
        font-size: 1.4rem;    
    }

    .icon {
        height: 24px;
        margin-right: 1rem;
        width: 24px;
    }
`

export default Footer
