import Image from "next/image";

export default function SectionFirst() {
  return (
    <header id="section_first" className="page_section">
      <div className="wrapper wrapper--section_first">
        <Image
          src="/img/20347006_1047877912015207_2013755533386842112_n.jpg"
          alt="Marcin Kalinowski"
          className="section_first_image"
          width={180}
          height={180}
        />
        <h1 className="heading section_first_heading">
          <span className="section_first_heading_big">Marcin Kalinowski</span>
          <span className="section_first_heading_small screen-only">
            Front-End Developer Portfolio
          </span>
          <span className="section_first_heading_small print-only">
            Front-End Developer
          </span>
        </h1>
        <a href="#section_about" className="section_first_more screen-only">
          Czytaj więcej
        </a>
      </div>
    </header>
  );
}
