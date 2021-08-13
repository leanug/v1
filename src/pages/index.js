import React from 'react'
import Layout from "../components/Layout"
import Seo from '../components/SEO'
import Logos from '../components/Logos'
import Portfolio from '../components/Portfolio'
import SectionTitle from '../components/SectionTitle'
import sections from '../constants/sections'

const IndexPage = () => {
    return (
        <Layout>
            <Seo 
                title="Home"
            />
            <article className="wrapper-fluid mt-100 mb-160">
                <section className="section-mb">
                    <h1 className="display-two">
                        Hello, I'm Leandro, a Web Developer from Uruguay. 
                        My main focus is developing accessible and performant websites.
                    </h1>
                </section>
                <section className="section-mb">
                    <SectionTitle data={ sections[ 2 ] } />
                    <Portfolio />
                </section>
                <section className="section-mb">
                    <SectionTitle data={ sections[ 0 ] } />
                    <p className="display-two">
                        I took my first steps in web development with html and css, making free themes for Myspace.
                        From 2010 to 2016 I ran a network of niche websites made with php.
                        After that I worked as a freelancer building and fixing WordPress websites and themes.
                        Eventually, I grew tired of php and migrated to javascript. 
                        I've been working with React.js ever since.
                    </p>
                </section>
                <section className="section-mb">
                    <SectionTitle data={ sections[ 1 ] } />
                    <Logos />
                </section>
                <section>
                    <SectionTitle data={ sections[ 3 ] } />
                    <a href="mailto:leandroubilla@protonmail.com" className="display-two">Say Hi to Leandro</a><br />
                    <a href="https://github.com/leanug" className="display-two">GitHub</a><br />
                    <a href="https://instagram.com/leanugram" className="display-two">Instagram</a>
                </section>
            </article>
        </Layout>
    )
}

export default IndexPage