import { createGlobalStyle } from 'styled-components'

const Globals = createGlobalStyle`
    :root {
        --primary-font: "Rubik", Roboto, Helvetica, Arial, sans-serif;
        --radius-alpha: 0.5rem;
        --radius-beta: 1rem;
        --radius-gamma: 50%;
        --line-heigh-alpha: 1.5;
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5% !important;
    }

    body {
        background-color: ${({ theme }) => theme.omega };
        color: ${({ theme }) => theme.psi };
        font-family: var(--primary-font);
        font-size: 1.8rem;
        line-height: var(--line-heigh-alpha);
        transition: color 0.25s linear;
    }

    .wrapper {
        max-width: 132rem;
        margin: auto;
        padding-left: 2rem;
        padding-right: 2rem;
        width: 100%;
    }

    .wrapper-fluid {
        padding-left: calc(2rem + 4vw);
        padding-right: calc(2rem + 4vw);
    }

    .display-grid {
        display: grid;
        grid-gap: 3rem;

        @media screen and ( min-width: 768px ) {
            grid-template-columns: repeat( auto-fit, minmax( 30rem, 1fr ));
        }
    }

    .header-1, h1,
    .header-2, h2,
    .header-3, h3,
    .header-4, h4,
    .header-5, h5,
    .header-6, h6,
    .display-one,
    .display-two,
    .display-three,
    .display-four  {
        line-height: 1.4;
        margin: 0;
        font-weight: 400;
    }

    h1, .header-1 {
        font-size: 4rem;
    }

    h2, .header-2 {
        font-size: 3.2rem;
    }

    h3, .header-3 {
        font-size: 2.5rem;
    }

    h4, .header-4 {
        font-size: 1.75rem;
    }

    h5, .header-5 {
        font-size: 1.55rem;
    }

    h6, .header-6 {
        font-size: 1rem;
    }

    @media screen and ( min-width: 768px ) {
        h1, .header-1 {
            font-size: 4.5rem;
        }

        h2, .header-2 {
            font-size: 3.8rem;
        }

        h3, .header-3 {
            font-size: 3rem;
        }

        h4, .header-4 {
            font-size: 2.25rem;
        }

        h5, .header-5 {
            font-size: 1.75rem;
        }

        h6, .header-6 {
            font-size: 1.25rem;
        }
    }

    .display-one {
        font-size: calc( 2.5rem + 5vw );
    }

    .display-two {
        font-size: calc( 2.5rem + 3.5vw );
    }

    .display-three {
        font-size: calc( 2.5rem + 2.8vw );
    }

    .display-four {
        font-size: calc( 2.5rem + 2.2vw );
    }

    .display-flex {
        display: flex;
    }

    .align-items-center {
        align-items: center;
    }

    .justify-content-center {
        justify-content: center;
    }

    .h-100 {
        height: 100%;
    }

    .w-100 {
        width: 100%;
    }

    .vh-100 {
        min-height: 100vh;
    }

    .vw-100 {
        min-width: 100vw;
    }

    .text-center {
        text-align: center;
    }

    .text-center {
        text-align: center;
    }

    .small-font {
        font-size: 1.4rem;
    }

    a {
        color: ${({ theme }) => theme.psi };
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    :focus {
        outline: none !important;
    }

    .w-100 {
        width: 100%;
    }

    .w-400 {
        @media screen and ( min-width: 768px ) {
            max-width: 40rem;
        }
    }

    .w-700 {
        max-width: 70rem;
    }

    .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .my-auto {
        margin-top: auto;
        margin-bottom: auto;
    }

    .section-my {
        margin-bottom: calc( 6rem + 10vw );
        margin-top: calc( 6rem + 10vw );

        @media screen and ( min-width: 1200px ) {
            margin-bottom: 16rem;
            margin-top: 16rem;
        }
    }

    .section-mb {
        margin-bottom: calc( 6rem + 10vw );
    }

    .section-mt {
        margin-top: calc( 6rem + 10vw );
    }

    @media screen and ( min-width: 1200px ) {
        .section-mb {
            margin-bottom: 16rem;
        }

        .section-mt {
            margin-top: 16rem;
        }
    }

    .mt-10 {
        margin-top: 1rem;
    }

    .mt-20 {
        margin-top: 2rem;
    }

    .mt-30 {
        margin-top: 3rem;
    }

    .mt-60 {
        margin-top: 6rem;
    }

    .mt-100 {
        margin-top: 10rem;
    }

    .mt-160 {
        margin-top: 16rem;
    }

    .mb-10 {
        margin-bottom: 1rem;
    }

    .mb-20 {
        margin-bottom: 2rem;
    }

    .mb-30 {
        margin-bottom: 3rem;
    }

    .mb-60 {
        margin-bottom: 6rem;
    }

    .mb-100 {
        margin-bottom: 10rem;
    }

    .mb-160 {
        margin-bottom: 16rem;
    }

    .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }

    .pt-60 {
        padding-top: 6rem;
    }

    .pt-100 {
        padding-top: 10rem;
    }

    .pb-60 {
        padding-bottom: 6rem;
    }

    .pb-100 {
        padding-bottom: 10rem;
    }
`

export default Globals