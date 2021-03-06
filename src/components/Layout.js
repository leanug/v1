/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react'
import BackToTopBtn from './BackToTopBtn'
import GlobalStyles from './GlobalStyles'
import Footer from './Footer'
import Header from './Header'
import { lightTheme, darkTheme } from '../theme';
import 'normalize.css'
import Sidebar from './Sidebar'
import PropTypes from "prop-types"
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled, { ThemeProvider, css } from 'styled-components'

const Layout = ({ children }) => {
  /* Checks if window exists for saving the theme in local storage */
  const url = typeof window !== 'undefined' 
    ? window.location.href 
    : '';
  /* Dark and Light themes */
  const [ theme, setTheme ] = useState( 'light' )
  const [ showSidebar, setShowSidebar ] = useState( false )
  
  const toggleSidebar = _ => {
    setShowSidebar( ! showSidebar )
  }

  const toggleTheme = _ => {
    if ( theme === 'light' ) {
      setTheme( 'dark') 
      url && window.localStorage.setItem( 'theme', 'dark' )
      return
    } 

    setTheme( 'light' ) 
    url && window.localStorage.setItem( 'theme', 'light' )
  }

  const scrollToSection = url => {
    scrollTo( `${ url }` )
  }

  useEffect( () => {
    const localTheme = window.localStorage.getItem( 'theme' )
    localTheme && setTheme( localTheme );
  }, []);
  
  return (
    <ThemeProvider 
      theme={ theme === 'light' ? lightTheme : darkTheme }
    >
      <GlobalStyles />
      <Overlay showSidebar={ showSidebar } />
      <Sidebar 
        toggleSidebar={ toggleSidebar }
        showSidebar={ showSidebar }
        scrollToSection={ scrollToSection }
      /> 
      <BackToTopBtn />
      <PageWrapper showSidebar={ showSidebar }>
        <Header
          theme={ theme }
          toggleTheme={ toggleTheme }
          toggleSidebar={ toggleSidebar }
          scrollToSection={ scrollToSection }
        />
        <main>
          { children }
        </main>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  )
}

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  margin: auto;
  max-width: var(--max-width);

  main {
    margin: 0 2rem;
  }
`

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  position: fixed;
  z-index: 40;

  ${({ showSidebar }) => {
    return showSidebar
    ? css`
      display: block;
    `
    : css`
      display: none;
    `
  }}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout