import * as React from 'react';
import { Link } from 'gatsby';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

import Helmet from 'react-helmet'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <Helmet
                title="Gatsby Default Starter"
            >
                <html lang="en" />
            </Helmet>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}



export default Layout;