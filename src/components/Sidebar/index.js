import React from 'react'
import { BsMoon, BsX } from 'react-icons/bs'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import sublinks from '../../constants/sublinks'
import SidebarSubLinks from './SidebarSubLinks'

const Sidebar = ({ isSidebarOpen, toggleSidebar, toggleTheme }) => (
    <Wrapper 
        className={`${ 
          isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar' 
        }`}
        aria-label="Main sidebar containing navigation links"
    >
      <div className="spacer"></div>
      <div className="btn-container">
        <button 
          className="close-btn" 
          aria-label="Close main sidebar" 
          onClick={ toggleSidebar }
        >
          <BsX />
        </button>
      </div>
      
      <div className="sidebar-content">
        { sublinks.map(( item,index ) => {
          const { links, page, url } = item
          
          if (links.length > 0 ) {
            return (
              <div key={ index } className="btn-wrapper">
                <SidebarSubLinks 
                  links={ links }
                  page={ page }
                  className="sidebar-btn"
                />
              </div>
                )
            } 

          return (
            <div key={ index }  className="btn-wrapper">
              <Link 
                className="sidebar-btn" 
                to={ url }
              >
                { page }
              </Link>
            </div>
          )
        })}
      </div>
      <div className="spacer"></div>
      <div className="theme-toggler-btn-container">
        <button
            aria-label="Dark or light website theme toggler"
            onClick={ toggleTheme }
            className="theme-toggler"
          >
            <BsMoon className="moon" />
        </button>
      </div>
      <div className="spacer"></div>
    </Wrapper>
)

const Wrapper = styled.aside`
  display: grid;
  grid-template-rows: 1rem auto 1fr 1rem auto 1rem;
  grid-gap: 1rem;
  height: 100%;
  padding: 0rem 2rem;
  position: fixed;
  background-color: ${({ theme }) => theme.colorDelta };
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: transform 0.25s ease-out;
  transform: translateX(-100%);
  width: 32rem;
  z-index: 999;
  
  .btn-wrapper {
    padding: 0.8rem 0;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colorEta };
    }
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .close-btn {
    align-items: center;
    background-color: ${ ({ theme }) => theme.colorEta };
    border: none;
    border-radius: var(--border-radius-alpha);
    color: ${ ({ theme }) => theme.colorPsi };
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    font-size: 2.5rem;
    width: 48px;
  }

  &.show-sidebar {
    transition: transform 0.25s linear;
    transform: translateX(0);
  }

  .sidebar-btn {
    color: ${ ({ theme }) => theme.colorPsiFixed };
    display: block;
    font-weight: 600;
  }

  .theme-toggler-btn-container {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .theme-toggler {
    align-items: center;
    background-color: ${ ({ theme }) => theme.colorEta };
    border: none;
    border-radius: var(--border-radius-alpha);
    height: 48px;
    justify-content: center;
    width: 48px;
  }

  .spacer {
    height: 1rem;
    width: 100%;
  }
`

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired, 
}

export default Sidebar