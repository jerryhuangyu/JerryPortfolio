import { About, Contact, Hero, Project, Skill, Navbar } from './sections';
import { FloatActionButton } from './components';

const Home = () => {
  return (
    <div className='bg-primary-light dark:bg-primary-dark'>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <FloatActionButton />
    </div>
  )
}

export default Home