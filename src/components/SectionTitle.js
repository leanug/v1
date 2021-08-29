import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({ title, number }) => {
    return (
        <Wrapper>
            <span>{ number }</span>
            <span>{ title }</span>
            <Line />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: var(--secondary-font);
    font-size: 2rem;
    margin-bottom: 3rem;

    span:first-child {
        color: ${({ theme }) => theme.delta };
        font-size: 1.4rem;
        margin-right: 1rem;
    }
`

const Line = styled.div`
    background-color: ${({ theme }) => theme.gamma };
    display: inline-block;
    height: 1px;
    max-width: 14rem;
    margin-left: 1.2rem;
    margin-bottom: 6px;
    width: 100%;

    @media screen and ( min-width: 576px ) {
        max-width: 24rem;
    }
`

export default SectionTitle
