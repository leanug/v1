import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import Seo from '../components/SEO'
import styled from 'styled-components'

const NotFoundPage = () => {
    return (
        <Layout>
            <Seo 
                title="404 - Page not found"
            />
            <Wrapper>
                <div className="text-center">
                    <h1 className="display-one">404</h1>
                    <h2 className="display-four mb-30">Page not found</h2>
                    <Link className="button" to="/">Home</Link>
                </div>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;

    .button {
        border: 1px solid ${({ theme }) => theme.gamma };
        border-radius: var(--radius-alpha);
        padding: 1rem 2rem;
    }
`

export default NotFoundPage
