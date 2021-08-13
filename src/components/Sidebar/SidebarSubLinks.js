import React, { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const SidebarSubLinks = ({ links, page }) => {
    const [ showLinks, setShowLinks ] = useState( false )
    const [ height, setHeight ] = useState( 0 )
    const ref = useRef( null )

    // useEffect will run on stageCanvasRef value assignment
    useEffect( () => {
        if ( ref.current ){
          setHeight ( ref.current.offsetHeight )
        }
    }, [ ref ]);

    return (
        <Wrapper>
            <button
                onKeyDown={ () => setShowLinks( ! showLinks )} 
                onClick={ () => setShowLinks( ! showLinks )}
            >
                { page } { showLinks ? <FiChevronUp className="icon" /> : <FiChevronDown className="icon" /> }            
            </button>
            
            <ListWrapper height={ height } showLinks={ showLinks }>
                <List  ref={ ref }>
                    {links.map(( link, index ) => {
                        const { url, icon, label } = link
            
                        return(
                        <li key={ index }>
                            <Link className="sublink" to={ url }>{ icon && icon }{ label }</Link>
                        </li>
                        )
                    })}
                </List>
            </ListWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    button {
        align-items: center;
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.colorPsiFixed };
        cursor: pointer;
        display: flex;
        font-weight: 600;
        justify-content: space-between;
        line-height: 2;
        width: 100%;
    }

    .icon {
        font-size: 2rem;
    }
`

const ListWrapper = styled.div`
    overflow: hidden;
    transition: max-height 0.4s ease-out;

    ${({ showLinks, height }) => {
        return showLinks
            ? css`
                // Include the margin/padding for a smooth transition
                max-height: ${ `${ height }px` }; 
            `
            : css`
                max-height: 0;
            `
    }}

`

const List = styled.ul`
    list-style: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    padding-bottom: 1rem;

    a {
        color: ${({ theme }) => theme.colorDelta };
        display: block;
        padding: .4rem 1.5rem;
        width: 100%;

        &:hover {
            color: ${({ theme }) => theme.colorAlpha };
            background-color: ${({ theme }) => theme.colorGammaFixed };
        }
    }
`

SidebarSubLinks.propTypes = {
    links: PropTypes.array.isRequired,
    page: PropTypes.string.isRequired,
}

export default SidebarSubLinks
