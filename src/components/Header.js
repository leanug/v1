import React from 'react'
import { BsMoon } from 'react-icons/bs'
import styled from 'styled-components'

const Navbar = ({ toggleTheme }) => {
    return (
        <Header className="wrapper-fluid">
            <div>
                <span className="logo">L:&#10095; UG</span>
            </div>
            <button
                aria-label="Dark or light website theme toggler"
                onClick={ toggleTheme }
                className="theme-toggler"
            >
                <BsMoon className="icon" />
            </button>
        </Header>
    )
}

const Header = styled.header`
    align-items: center;
    background-color: transparent;
    display: flex;
    transition: color 0.3s linear;
    height: 8rem;
    justify-content: space-between;
    
    .logo {
        font-family: var(--dos-font);
        font-size: 2rem;
    }

    .cursor {
        background: lime;
        display: inline-block;
        line-height: 17px;
        margin-left: 3px;
        animation: blink 0.8s infinite;
        width: 7px;
        height: 2px;
    }

    @keyframes blink {
        0% {background: ${({ theme }) => theme.psi }}
        50% {background: ${({ theme }) => theme.omega }}
        100% {background: ${({ theme }) => theme.psi }}
    }

    .theme-toggler {
        align-items: center;
        justify-content: center;
    }

    .icon {
        color: ${({ theme }) => theme.psi };
        height: auto;
        transition: all 0.25s linear;
        width: 2rem;

        @media screen and ( max-width: 768px ) {
            width: 4rem;
        }
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