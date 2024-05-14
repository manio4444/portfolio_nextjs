interface ISectionAboutProps {
  about: { title: string; description: string };
}

export default function SectionAbout({ about }: ISectionAboutProps) {
  return (
    <section id="section_about" className="page_section screen-only">
      <div className="wrapper">
        <h2 className="heading">{about.title}</h2>
        <p className="section_about_desc">{about.description}</p>
      </div>
    </section>
  );
}
