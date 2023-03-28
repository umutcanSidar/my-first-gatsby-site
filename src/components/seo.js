import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <title>{title} | {data.site.siteMetadata.title}</title>
            <html lang="en" />
        </>
    )
}

export default Seo;