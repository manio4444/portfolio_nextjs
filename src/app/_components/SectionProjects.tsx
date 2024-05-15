import { type Project } from "~/server/data/projects";

interface ISectionProjectsProps {
  projects: {
    data: Project[];
  };
}

export default function SectionProjects({ projects }: ISectionProjectsProps) {
  return (
    <section id="section_projects" className="page_section screen-only">
      <div className="wrapper">
        <h2 className="heading">Przykładowe projekty</h2>
        <div className="section_projects_content">
          {projects.data.map((project) => (
            <article
              key={project.key}
              className={`section_projects_el section_projects_el--${project.key}`}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className="section_projects_el_title">{project.title}</h3>
                <span className="section_projects_el_date">
                  <time dateTime={`${project.date}`}>{project.date}, </time>
                  <span>{project.client}</span>
                </span>
                <p className="section_projects_el_desc">
                  {project.technologies}
                </p>
                <p className="section_projects_el_desc">{project.scope}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
