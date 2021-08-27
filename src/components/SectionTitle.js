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
        margin-right: 1rem;
        font-size: 1.4rem;
    }
`

const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => theme.gamma };
    max-width: 24rem;
    width: 24rem;
    display: inline-block;
    margin-left: 2rem;
    margin-bottom: 7px;
`

export default SectionTitle
