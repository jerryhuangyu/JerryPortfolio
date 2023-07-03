import { ContactForm } from "../components/contact"
import { SectionWrapper } from '../components/hoc'

const Contact = () => {
  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <ContactForm />
      <div className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1">3d model</div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")