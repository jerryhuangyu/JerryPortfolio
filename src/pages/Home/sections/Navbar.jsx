import { Company } from '../components/navbar'

const Navbar = () => {
  return (
    <nav className='fixed w-full top-0 z-50'>
      <div className='flex w-full items-center justify-center py-5'>
        <Company />
      </div>
    </nav>
  )
}

export default Navbar