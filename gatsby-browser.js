import React from 'react'
import 'normalize.css'
import Layout from "./src/components/Layout"
import { MDXProvider } from '@mdx-js/react'

export const wrapPageElement = ({ element, props }) => (
    <MDXProvider>
        <Layout { ...props }>
            { element }
        </Layout>
    </MDXProvider>
)