import { useTranslation } from "react-i18next";
import { Content, SectionTitle } from "../components";
import { SectionWrapper } from "../components/hoc";
import { ProjectCard } from "../components/project";
import { projects } from "../../../constants";

const Project = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle title={"my works"} subtitle={"projects."} />
      <Content content={t("work.intro")} />
      <div className='mt-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6'>
        {projects.map((projects, index) => (
          <ProjectCard
            key={`project-${index}`}
            title={projects.name}
            tags={projects.tags}
            src={projects.image}
            githubLink={projects.source_code_link}
            demoLink={projects.demo_link}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, "work");
