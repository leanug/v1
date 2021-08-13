import React from 'react'
import { BsMoon } from 'react-icons/bs'
import styled from 'styled-components'

const Navbar = ({ toggleTheme }) => {
  return (
    <Header>
      <button
          aria-label="Dark or light website theme toggler"
          onClick={ toggleTheme }
          className="theme-toggler"
        >
          <BsMoon className="moon" />
      </button>
    </Header>
  )
}

const Header = styled.header`
  align-items: center;
  background-color: transparent;
  display: flex;
  padding: 0 2rem;
  transition: color 0.3s linear;
  width: 100%;
  height: 8rem;
  justify-content: flex-end;
  
  .theme-toggler {
    align-items: center;
    height: 48px;
    justify-content: center;
    width: 48px;
  }

  .moon {
    color: ${({ theme }) => theme.psi };
    height: auto;
    transition: all 0.25s linear;
    width: 2rem;
  }

  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    line-height: 1;
    padding: 0;
    width: min-content;
  }
`

export default Navbar