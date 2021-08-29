import React from 'react'
import { BsMoon } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import links from '../constants/links'
import styled from 'styled-components'

const Navbar = ({ toggleTheme, toggleSidebar, scrollToSection }) => {
    const showNavbar = typeof window !== 'undefined' 
    ? window.location.pathname === '/' ? true : false 
    : true;
    
    return (
        <Header className="wrapper-fluid">
            <div>
                <span className="logo">L:&#10095; UG</span>
                <span className="cursor"></span>
            </div>
            <div>
                { showNavbar && links.map(( item, index ) => {
                    return (
                        <button
                            key={ index }
                            onClick={() => scrollToSection( `${ item.url }` )}
                            onKeyPress={() => scrollToSection( `${ item.url }` )}
                            aria-label={ `scroll to ${ item.title } section` }
                            className="nav-btn"
                        >
                            { item.title }
                        </button>
                    )
                })}
                <button 
                    onClick={ toggleSidebar }
                    onKeyPress={ toggleSidebar }
                    aria-label="scroll to contact section"
                    className="aside-btn"
                >
                    <FaBars className="icon" />
                </button>
                <ThemeTogglerBtn
                    aria-label="Dark or light website theme toggler"
                    onClick={ toggleTheme }
                >
                    <BsMoon className="icon moon" />
                </ThemeTogglerBtn>
            </div>
        </Header>
    )
}

const Header = styled.header`
    align-items: center;
    background-color: transparent;
    display: flex;
    height: 6rem;
    justify-content: space-between;
    margin-top: 4rem;
    transition: color 0.3s linear;

    .logo {
        display: flex;
        font-family: var(--dos-font);
        font-size: 2rem;
    }

    .cursor:before {
        margin-left: 3px;
        animation: blink 0.8s infinite;
        content: "_";
    }

    @keyframes blink {
        0% {opacity: 1}
        50% {opacity: 0}
        100% {opacity: 1}
    }

    .nav-btn {
        color: ${({ theme }) => theme.psi };
        margin: 0 1rem;
        background-color: transparent;
        border: none;
        font-size: 1.4rem;
        cursor: pointer;
        transition: color 0.25s linear;
        font-family: var(--secondary-font);

        @media screen and ( max-width: 576px ) {
            display: none;
        }
    }

    .nav-btn:before {
        margin-right: 0.5rem;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.delta };
    }

    .nav-btn:nth-of-type(1):before {
        content:"01.";
    }

    .nav-btn:nth-of-type(2):before {
        content:"02.";
    }

    .nav-btn:nth-of-type(3):before {
        content:"03.";
    }

    .nav-btn:nth-of-type(4):before {
        content:"04.";
    }

    div {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .aside-btn {
        cursor: pointer;
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.gamma };
        border-radius: var(--radius-alpha);
        font-size: 2rem;
        width: 48px;
        height: 48px;

        .icon {
            color: ${({ theme }) => theme.psi };
            margin-top: 6px;
        }

        @media screen and ( min-width: 576px ) {
            display: none;
        }
    }
`

const ThemeTogglerBtn = styled.button`
    align-items: center;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.gamma };
    border-radius: var(--radius-alpha);
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 48px;
    line-height: 1;
    margin-left: 1rem;
    width: 48px;

    .icon {
        color: ${({ theme }) => theme.psi };
        height: auto;
        transition: all 0.25s linear;
        width: 2rem;
    }
`

export default Navbar