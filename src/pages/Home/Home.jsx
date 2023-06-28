import { About, Contact, Hero, Project, Skill, Navbar } from './sections'

const Home = () => {
  return (
    <div className='bg-primary-light dark:bg-primary-dark'>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default Home