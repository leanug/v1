import React from 'react'
import { func } from 'prop-types';
import { BsMoon, BsSun } from 'react-icons/bs'
import styled from 'styled-components'

function ThemeToggle({ toggleTheme }) {
    return (
        <Wrapper 
          onClick={ toggleTheme }
          onKeyPress={ toggleTheme }
        >
            <BsSun className="sun" />
            <BsMoon className="moon" />
        </Wrapper>
    )
}

const Wrapper = styled.button`
    color: ${({ theme }) => theme.psi };
    cursor: pointer;
    display: flex;
    margin: 0 auto;
    padding: 0.1rem !important;
    width: 8rem;
    height: 5rem;
`

ThemeToggle.propTypes = {
    toggleTheme: func.isRequired,
}

export default ThemeToggle

