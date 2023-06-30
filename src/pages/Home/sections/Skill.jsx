import { SectionWrapper } from "../components/hoc"
import { SectionTitle, Content } from "../components";
import { technologies } from '../../../constants';
import { BallCanvas } from '../components/canvas'

const Skill = () => {
  return (
    <div className="">
      <SectionTitle title={'technologies'} subtitle={"my skills."}/>
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Skill, "skill");