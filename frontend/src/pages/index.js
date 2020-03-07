import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import logo from "images/Heg.svg"
import SEO from "components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="ECMASports" />
    <center>
      <img src={logo} alt=" " />
    </center>
  </Layout>
)

export default IndexPage
