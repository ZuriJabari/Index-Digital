import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout"
import { Hero } from "../components/hero"
import { Services } from "../components/services"
import { Portfolio } from "../components/portfolio"
import { Testimonials } from "../components/testimonials"
import { Contact } from "../components/contact"
import { Team } from "../components/team"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Index Digital - Building Digital Excellence</title>
