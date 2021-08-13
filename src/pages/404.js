import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import Seo from '../components/SEO'

const NotFoundPage = () => {
    return (
        <Layout>
            <Seo 
                title="404 - Page not found"
            />
            <section className="wrapper mt-gamma mb-gamma">
                <div className="text-center">
                    <h1 className="display-one">404</h1>
                    <h2 className="display-four mb-30">Page not found</h2>
                    <Link className="button button-bg" to="/">Home</Link>
                </div>
            </section>
        </Layout>
    )
}

export default NotFoundPage
