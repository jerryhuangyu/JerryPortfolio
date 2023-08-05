import { SectionWrapper } from "../hoc"
import { SectionTitle } from "../";
import { technologies } from '../../../../constants';
import { BallCanvas } from '../canvas'

const SkillInner = () => {
  return (
    <>
      <SectionTitle title={'technologies'} subtitle={"my skills."}/>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-14">
        {technologies.map((tech) => (
          <div className="w-16 sm:w-28 h-16 sm:h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(SkillInner, "skill");