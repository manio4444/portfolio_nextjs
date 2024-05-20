import { type ExperienceItem } from "~/server/data/experience";
import { type EducationItem } from "~/server/data/education";
import {
  Briefcase,
  Calendar,
  GraduationCap,
} from "~/app/_components/FontAwesome6Icons";

interface ISectionExperienceProps {
  experience: {
    data: ExperienceItem[];
  };
  education: {
    data: EducationItem[];
  };
}

export default function SectionExperience({
  experience,
  education,
}: ISectionExperienceProps) {
  return (
    <section id="section_experience" className="page_section">
      <div className="wrapper wrapper--section_experience">
        <h2 className="heading section_experience_heading">
          Doświadczenie zawodowe
        </h2>
        <div className="section_experience_side section_experience_side--left">
          <div className="section_experience_icon">
            <Briefcase />
          </div>
          {experience.data.map((job, index) => (
            <article key={index} className="section_experience_el">
              <div className="section_skills_el_content">
                <h3
                  data-aos="fade-right"
                  className="section_experience_el_title"
                >
                  {job.title}
                </h3>
                <time
                  data-aos="fade-right"
                  className="section_experience_el_date"
                  dateTime={job.datetimeTag}
                >
                  <Calendar />
                  {job.datetimeText}
                </time>
                <p data-aos="fade-right" className="section_experience_el_desc">
                  {job.description}
                </p>
                {job.subprojects?.map((subproject, subIndex) => (
                  <div key={subIndex}>
                    <p
                      data-aos="fade-right"
                      className="section_experience_el_desc"
                    >
                      <strong>{subproject.title} -</strong>{" "}
                      {subproject.description}
                    </p>
                    {subproject.tags && (
                      <p
                        data-aos="fade-right"
                        className="section_experience_el_tags"
                      >
                        {subproject.tags.map((tag, tagIndex) => (
                          <span key={tagIndex}>{tag}</span>
                        ))}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="section_experience_side section_experience_side--right screen-only">
          <div className="section_experience_icon section_experience_icon--school">
            <GraduationCap />
          </div>
          {education.data.map((education, index) => (
            <article key={index} className="section_experience_el">
              <h3 data-aos="fade-left" className="section_experience_el_title">
                {education.title}
              </h3>
              <time
                data-aos="fade-left"
                className="section_experience_el_date"
                dateTime={education.datetimeTag}
              >
                <Calendar />
                {education.datetimeText}
              </time>
              <p data-aos="fade-left" className="section_experience_el_desc">
                {education.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
