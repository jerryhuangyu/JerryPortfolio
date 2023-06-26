import { motion } from "framer-motion"
import { SectionWrapper } from '../components/hoc'

import { abouts } from "../../../constants"
import { InfoCard } from '../components/about'

const About = () => {
  return (
    <div className=" bg-slate-500">
      <div className="">some</div>

      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {abouts.map((about, index) => (
          <InfoCard info={about.title} key={about.title}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about');