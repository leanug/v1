import React from 'react'
import { IoMdClose } from 'react-icons/io'
import links from '../constants/links'
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components'

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  /* It closes the sidebar and scrolls to the selected section */
  const btnHandler = url => {
    toggleSidebar()
    setTimeout(() => {
      scrollTo( `${ url }` )
    }, 50);
  }

  return (
    <Wrapper 
        className={ `${ showSidebar ? 'sidebar showSidebar' : 'sidebar' }` }
        aria-label="Main sidebar containing navigation links"
    >
      <div className="btn-container">
          <button 
            onClick={ toggleSidebar } 
            className="close-btn"
            aria-label="Close sidebar"
          >
            <IoMdClose />
          </button>
      </div>
      <div className="sidebar-content">
        <div className="content">
          { links.map(( item, index ) => {
            return (
              <div className="wrapper" key={ index }>
                <div>{ `0${ index + 1 }.` }</div>
                <button
                    onClick={() => btnHandler( `${ item.url }` )}
                    onKeyPress={() => btnHandler( `${ item.url }` )}
                    aria-label={ `scroll to ${ item.title } section` }
                    className="nav-btn"
                >
                    { item.title }
                </button>
              </div>
            )
          })}
        </div>
        
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
    &.sidebar {
      background-color: ${({ theme }) => theme.omega };
      display: grid;
      font-family: var(--secondary-font);
      grid-auto-flow: row;
      grid-template-rows: auto 1fr;
      height: 100vh;
      min-width: 32rem;

      overflow-x: hidden;
      padding: 5rem 3rem;
      position: fixed;
      right: 0;

      transition: all 0.2s ease-out;
      transform: translateX(100%);
      top: 0;
      z-index: 999;

      a {
        font-size: 1.7rem;
      }

      .btn-container {
        display: flex;
        justify-content: flex-end;
      }

      .close-btn {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 3rem;
      }

      .sidebar-content {
        width: 100%;
        display: flex;
        align-items: center;
        height: 100%;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin-bottom: 10rem;

        .wrapper {
          margin: 1rem 0;
          text-align: center;

          div {
            color: ${({ theme }) => theme.delta };
            font-size: 1.2rem;
          }
        }
      }

      .links-container {
        padding-top: 2rem;
      }

      &.showSidebar {
        transition: all 0.2s ease-out;
        transform: translateX(0);
      }

      .nav-btn {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.psi };
        cursor: pointer;
        font-family: var(--secondary-font);
        font-size: 2rem;

        transition: color 0.25s linear;
      }
    }
`

export default Sidebar