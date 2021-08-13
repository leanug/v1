import React from 'react'
import styled from 'styled-components'
import Window from './Window'

const HelloMsg = ({ isHelloMsgOpen, setHelloMsgOpen}) => {
    return (
        <Window
            isWindowOpen={ isHelloMsgOpen }
            setIsWindowOpen={ setHelloMsgOpen }
            title="Hello Message">
            <Wrapper>
                <div className="w-700">
                    <h1>Hello</h1>
                    <p className="mb-20 mt-20">
                    I’m Leandro, a freelance Front End developer from Uruguay.<br />
                    I specialize in fast React, Gatsby,  and WordPress sites.
                    Thank you. &gt;
                    </p>
                    <div className="text-center">
                        <button className="button button-bg">Portfolio</button>
                        <button className="button button-outline">About me</button>
                    </div>
                </div>
            </Wrapper>
        </Window>
    )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 3rem;
    }

    button {
        margin: 0 1.5rem;
    }
`

export default HelloMsg
