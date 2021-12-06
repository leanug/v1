import React, { useState } from 'react'
import { graphql } from "gatsby"
import Projects from '../components/Projects'
import SectionTitle from '../components/SectionTitle'
import Seo from '../components/SEO'
import styled from 'styled-components'

const IndexPage = ({ data: { allMdx: { nodes: allProjects } } }) => {
    const [projects, setProjects] = useState(allProjects)
    
    const changeCat = cat => {
        if (cat === 'all') {
            setProjects(allProjects)
            return
        }

        const filteredProjects = allProjects.filter(
            ({ frontmatter: { category } }) => category === cat
        )
        setProjects(filteredProjects)
    }

    return (
        <>
            <Seo />
            <article className="wrapper-fluid mt-100 section-mb">
                <section className="section-mb">
                    <Line />
                    <span className="mr-10 t-delta">Hello</span>👋
                    <h1 className="display-two mt-20">
                        My name is Leandro,<br />
                        I'm a web developer and designer from Uruguay.<br />
                        I build and occasionally design accessible and performant websites.<br />
                        I'm available for hire.
                    </h1>
                </section>
            
                <section className="section-mb" id="projects">
                    <SectionTitle title="Projects" number="01." />
                    <CategoryBtn onClick={ ()=>changeCat('all') }>All</CategoryBtn>
                    <CategoryBtn onClick={ ()=>changeCat('react') }>React</CategoryBtn>
                    <CategoryBtn onClick={ ()=>changeCat('gatsby') }>Gatsby</CategoryBtn>
                    <CategoryBtn onClick={ ()=>changeCat('design') }>Design</CategoryBtn>
                    <Projects projects={ projects } />
                </section>

                <section className="section-mb" id="about">
                    <SectionTitle title="About me" number="02." />
                    <p className="display-two mb-30">
                        I took my first steps in web development back in 2008 when I started making themes for Myspace with CSS and HTML.
                    </p>
                    <p className="display-two mb-30">
                        From 2010 to 2016, I ran a network of niche websites made with PHP, HTML5, and MySQL.
                    </p>
                    <p className="display-two mb-30">
                        After that, I worked as a freelancer building and fixing WordPress websites and themes.
                    </p>
                    <p className="display-two mb-30">
                        Eventually, I migrated to React.js, and I've been building React websites ever since.
                    </p>
                </section>
            
                <section className="section-mb" id="stack">
                    <SectionTitle title="My stack" number="03." />
                    <div className="display-two">
                        React.js / Gatsby / ES6 / HTML5 / WordPress / PHP / MySQL / Figma
                    </div>
                </section>
            
                <section id="contact">
                    <SectionTitle title="Contact" number="04." />
                    <a href="mailto:leandroubilla@protonmail.com" className="display-two">
                        Say Hi to Leandro
                    </a>
                    <br />
                    <a 
                        href="https://github.com/leanug" 
                        target="_blank" 
                        className="display-two"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <br />
                    <a 
                        href="https://www.linkedin.com/in/leandro-ubilla-gonzalez" 
                        target="_blank"
                        rel="noreferrer"
                        className="display-two"
                    >
                        LinkedIn
                    </a>
                </section>
            </article>
        </>
    )
}

export const query = graphql`
  {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          category
          excerpt
          github
          image {
            id
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 100, height: 435, width: 580)
            }
          }
          live
          slug
          tags
          title
        }
      }
    }
  }
`

const CategoryBtn = styled.button`
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.gamma };
    border-radius: var(--radius-alpha);
    cursor: pointer;
    font-size: var(--fs-small);
    margin: 0 1rem 1rem 0;
    padding: .8rem 2rem;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.epsilon };
    }
`

const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => theme.delta };
    max-width: 24rem;
    width: 8rem;
    display: inline-block;
    margin-bottom: 6px;
    margin-right: 1rem;
`

export default IndexPage
