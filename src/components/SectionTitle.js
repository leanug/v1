import React from 'react'
import styled, { css } from 'styled-components'

const SectionTitle = ({ data: { name, svg }}) => {
    return (
        <Wrapper>
            <div className="grid">
                <img src={ svg } alt="About me section" />
                <h3>{ name }</h3>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 3rem;
    align-items: baseline;

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

    h3 {
        grid-area: a;
        justify-self: center;
        align-self: center;
        font-weight: 600;
    }

    .icon {
        height: 2rem;
        margin-left: 1rem;
        width: 2rem;
    }

    @media screen and (max-width: 576px) {
        img {
            max-width: 20rem;
        }
    }
`

export default SectionTitle
