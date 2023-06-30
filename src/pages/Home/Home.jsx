import { About, Contact, Hero, Project, Skill, Navbar } from './sections'

const Home = () => {
  return (
    <div className='bg-primary-light dark:bg-primary-dark'>
      <Navbar />
      <Hero />
      <About />
      <div className='bg-none dark:bg-tech bg-cover bg-center bg-no-repeat pb-10'>
        <Skill />
      </div>
      <Project />
      <Contact />
    </div>
  )
}

export default Home