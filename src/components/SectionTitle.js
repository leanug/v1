import React from 'react'
import styled, { css } from 'styled-components'

const SectionTitle = ({ data: { name, svg }}) => {
    return (
        <Wrapper>
            <div className="grid">
                <img src={ svg } alt="About me section" />
                <h2>{ name }</h2>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 3rem;

    .grid {
        display: grid;
        grid-template-areas: a;
    }

    img {
        grid-area: a;
        ${({ theme }) => theme.name === 'dark'
            ? css`
                opacity: 0.05;
            `
            :css`
                opacity: 1;
            `
        }
    }

    h2 {
        grid-area: a;
        justify-self: center;
        align-self: center;
        font-weight: 500;
    }

    @media screen and (max-width: 576px) {
        img {
            max-width: 20rem;
        }
    }
`

export default SectionTitle
