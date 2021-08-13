import React from 'react'
import styled from 'styled-components'

import img1 from '../images/logos/gatsbyjs-ar21.svg'
import img2 from '../images/logos/reactjs-ar21.svg'
import img3 from '../images/logos/figma-1.svg'
import img4 from '../images/logos/WordPress_logo.svg'
import img5 from '../images/logos/es6-seeklogo.com.svg'
import img6 from '../images/logos/HTML5_logo_and_wordmark.svg'

/**
 * Client logos
 */
const Logos = () => {
    return (
        <Wrapper>
            <img src={ img2 } alt="react logo" role="presentation" />
            <img src={ img1 } alt="gatsby js logo" role="presentation" />
            <img src={ img3 } alt="figma logo" role="presentation" />
            <img src={ img5 } alt="ecma script 6 javascript logo" role="presentation" />
            <img src={ img4 } alt="wordpress logo" role="presentation" />
            <img src={ img6 } alt="HTML5 logo" role="presentation" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax( 10rem, 1fr ));
    grid-gap: 4rem;
    padding: 0 2rem;
    width: 100%;

    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr 1fr;
    }

    img {
        display: block;
        justify-self: center;
        max-height: 8rem;
        max-width: 16rem;
        width: 100%;
        filter: grayscale(100%);
        transition: filter 0.25s linear;

        &:hover {
            filter: grayscale(0);
        }
    }
`

export default Logos
