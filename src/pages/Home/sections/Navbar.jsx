import { Company } from '../components/navbar'

const Navbar = () => {
  return (
    <nav className='fixed top-0'>
      <div>
        <Company />
      </div>
    </nav>
  )
}

export default Navbar