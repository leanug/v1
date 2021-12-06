import React from 'react'
import Layout from './src/components/Layout'
import 'normalize.css'
import { MDXProvider } from '@mdx-js/react'

export const wrapPageElement = ({ element, props }) => (
    <MDXProvider>
        <Layout { ...props }>
            { element }
        </Layout>
    </MDXProvider>
)