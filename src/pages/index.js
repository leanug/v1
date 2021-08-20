import React from 'react'
import Layout from "../components/Layout"
import Seo from '../components/SEO'
import Portfolio from '../components/Portfolio'
import SectionTitle from '../components/SectionTitle'

const IndexPage = () => {
    return (
        <Layout>
            <Seo />
            <article className="wrapper-fluid mt-100 mb-160">
                <section className="section-mb">
                    <h1 className="display-two" >
                        Hello, I'm Leandro, a Web Developer from Uruguay. 
                        My main focus is developing accessible and performant websites.
                    </h1>
                </section>
                <section className="section-mb">
                    <SectionTitle title="Portfolio" number="01." />
                    <Portfolio />
                </section>
                <section className="section-mb">
                    <SectionTitle title="About me" number="02." />
                    <p className="display-two">
                        I took my first steps in web development with html and css, making free themes for Myspace.
                    </p>
                    <p className="display-two">
                        From 2010 to 2016 I ran a network of niche websites made with php.
                    </p>
                    <p className="display-two">
                        After that I worked as a freelancer building and fixing WordPress websites and themes.
                    </p>
                    <p className="display-two">
                        Eventually I migrated to javascript and I've been working with React.js ever since.
                    </p>
                </section>
                <section className="section-mb">
                    <SectionTitle title="My stack" number="03." />
                    <p className="display-two">
                        React / Gatsby / Figma / ES6 / WordPress / HTML5
                    </p>
                </section>
                <section>
                    <SectionTitle title="Contact" number="04." />
                    <a href="mailto:leandroubilla@protonmail.com" className="display-two">
                        Say Hi to Leandro
                    </a>
                    <br />
                    <a href="https://github.com/leanug" className="display-two">
                        GitHub
                    </a>
                </section>
            </article>
        </Layout>
    )
}

export default IndexPage
