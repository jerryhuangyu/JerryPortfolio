import { About, Contact, Hero, Project, Skill, Navbar } from './sections'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  )
}

export default Home