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
 import PropTypes from "prop-types"
 import styled, { ThemeProvider } from 'styled-components'
 
 const Layout = ({ children }) => {
   /* Checks if window exists for saving the theme in local storage */
   const url = typeof window !== 'undefined' 
     ? window.location.href 
     : '';
   /* Dark and Light themes */
   const [ theme, setTheme ] = useState( 'light' )

   const toggleTheme = _ => {
     if ( theme === 'light' ) {
       setTheme( 'dark') 
       url && window.localStorage.setItem( 'theme', 'dark' )
       return
     } 
 
     setTheme( 'light' ) 
     url && window.localStorage.setItem( 'theme', 'light' )
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
       <BackToTopBtn />
       <PageWrapper>
         <Header
           theme={ theme }
           toggleTheme={ toggleTheme }
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
 `
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout