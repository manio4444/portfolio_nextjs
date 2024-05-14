import { Skill } from "~/server/data/skills";

interface ISectionSkillsProps {
  skills: {
    data: Skill[];
  };
}

export default function SectionSkills({ skills }: ISectionSkillsProps) {
  return (
    <section id="section_skills" className="page_section">
      <div className="wrapper wrapper--section_skills">
        <h2 className="heading -section_skills">Umiejętności</h2>
        <div className="section_skills_el_container">
          {skills.data.map((skill, index) => (
            <article
              key={index}
              data-aos="zoom-in-up"
              className="section_skills_el"
            >
              <div className={`section_skills_el_icon ${skill.cssClassName}`}>
                {skill.svg && <skill.svg />}
              </div>
              <div className="section_skills_el_content">
                <h3 className="section_skills_el_title">{skill.title}</h3>
                {/*EXAMPLE STARTS - ●●◐○○*/}
                <div className="section_skills_el_star">{skill.stars}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
