import React from 'react'
import { BsMoon } from 'react-icons/bs'
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components'

const Navbar = ({ toggleTheme }) => {
    return (
        <Header className="wrapper-fluid">
            <div>
                <span className="logo">L:&#10095; UG</span>
            </div>
            <div>
                <button 
                    onClick={() => scrollTo('#projects')}
                    onKeyPress={() => scrollTo('#projects')}
                    aria-label="scroll to projects section"
                    className="nav-btn"
                >
                    Projects
                </button>
                <button 
                    onClick={() => scrollTo('#about')}
                    onKeyPress={() => scrollTo('#about')}
                    aria-label="scroll to about section"
                    className="nav-btn"
                >
                    About
                </button>
                <button 
                    onClick={() => scrollTo('#stack')}
                    onKeyPress={() => scrollTo('#stack')}
                    aria-label="scroll to about section"
                    className="nav-btn"
                >
                    My stack
                </button>
                <button 
                    onClick={() => scrollTo('#contact')}
                    onKeyPress={() => scrollTo('#contact')}
                    aria-label="scroll to contact section"
                    className="nav-btn"
                >
                    Contact
                </button>
                <ThemeTogglerBtn
                    aria-label="Dark or light website theme toggler"
                    onClick={ toggleTheme }
                >
                    <BsMoon className="icon" />
                </ThemeTogglerBtn>
            </div>
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
        font-size: 2.2rem;
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

    .nav-btn {
        color: ${({ theme }) => theme.psi };
        margin-right: 2rem;
        background-color: transparent;
        border: none;
        font-size: 1.4rem;
        cursor: pointer;
        transition: color 0.25s linear;
        font-family: var(--secondary-font);
    }

    .nav-btn:before {
        content:"01.";
        margin-right: 0.5rem;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.beta };

        &:first-child {
            content:"02.";
        }
    }

    div {
        display: flex;
        align-items: center;
        height: 100%;
    }
`

const ThemeTogglerBtn = styled.button`
    align-items: center;
    justify-content: flex-end;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    line-height: 1;
    width: 48px;
    height: 48px;
    display: flex;

    .icon {
        color: ${({ theme }) => theme.psi };
        height: auto;
        transition: all 0.25s linear;
        width: 2rem;
        margin-bottom: 6px;
    }
`

export default Navbar