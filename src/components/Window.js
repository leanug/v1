import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Window = ({ title, children, isWindowOpen, setIsWindowOpen }) => {

    return (
        <Wrapper isWindowOpen={ isWindowOpen }>
            <div className="header">
                <span>{ title }</span>
                <button
                    className="head-button"
                    onClick={ () => setIsWindowOpen( false ) }
                >
                   [ - ]
                </button>
            </div>
            <div className="body">
                {children}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colorDelta };
    display: block;
    margin: auto;
    width: 100vw;
    height: calc(100vh - 10rem);
    overflow-y: auto;

    ${({ isWindowOpen }) => {
        return isWindowOpen
            ? css`display: block;`
            : css`display: none;`
    }}

  //box-shadow: 0 6px 40px 20px ${({ theme }) => theme.colorAlpha };
  /* in order: x offset, y offset, blur size, spread size, color */
  /* blur size and spread size are optional (they default to 0) */
    
    .head-button {
        background-color: ${({ theme }) => theme.colorAlpha };
        border: none;
        color: ${({ theme }) => theme.colorDelta };
        cursor: pointer;
        padding: 0;
        height: 3.1rem;
    }

    .body {
        padding: 3rem;
        height: calc(100% - 4rem);
    }

    .header {
        background-color: ${({ theme }) => theme.colorAlpha };
        color: ${({ theme }) => theme.colorDelta };
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
    }
`

export default Window
