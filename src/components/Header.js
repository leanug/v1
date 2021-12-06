import React from 'react'
import Burger from './icons/Burger'
import links from '../constants/links'
import Moon from './icons/Moon'
import styled from 'styled-components'
import Sun from './icons/Sun'
import Logo from './Logo'

const Navbar = ({ toggleTheme, toggleSidebar, scrollToSection, theme }) => {
    const showNavbar = typeof window !== 'undefined' 
    /* Show the navbar only in the home page */
    ? window.location.pathname === '/' ? true : false 
    : true;
    
    return (
        <Header className="wrapper-fluid">
            <div>
                <Logo />
                <span className="cursor"></span>
            </div>
            <div>
                { showNavbar && links.map(( item, index ) => {
                    return (
                        <button
                            key={ index }
                            onClick={ () => scrollToSection( `${ item.url }`) }
                            onKeyPress={ () => scrollToSection( `${ item.url }`) }
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
                    <Burger />
                </button>
                <ThemeTogglerBtn
                    aria-label="Dark or light website theme toggler"
                    onClick={ toggleTheme }
                >
                    { theme === 'light' && <Sun /> }
                    { theme === 'dark' && <Moon /> }
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
    margin-left: 2rem;
    margin-right: 2rem;
    transition: color 0.3s linear;

    .logo {
        display: flex;
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