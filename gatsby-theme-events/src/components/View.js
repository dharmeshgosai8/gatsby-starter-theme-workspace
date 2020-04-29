import React from 'react'
import { Link } from "gatsby"
// import Layout from "../components/Layout"

const View = () => (
    // <Layout>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/policy/">Privacy Policy</Link></li>
        </ul>
    // </Layout>
)    

export default View;