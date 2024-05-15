import MainNavigation from "~/app/_components/MainNavigation";
import SectionFirst from "~/app/_components/SectionFirst";
import SectionAbout from "~/app/_components/SectionAbout";
import about from "~/server/data/about";
import SectionSkills from "~/app/_components/SectionSkills";
import skills from "~/server/data/skills";
import SectionExperience from "~/app/_components/SectionExperience";
import experience from "~/server/data/experience";
import education from "~/server/data/education";
import SectionPortfolio from "~/app/_components/SectionPortfolio";
import SectionFillers from "~/app/_components/SectionFillers";
import SectionExpectations from "~/app/_components/SectionExpectations";
import SectionProjects from "~/app/_components/SectionProjects";
import projects from "~/server/data/projects";
import SectionContact from "~/app/_components/SectionContact";
import SectionFooter from "~/app/_components/SectionFooter";
import { version } from "~/../package.json";

export default function Home() {
  return (
    <main className="page_container">
      <MainNavigation />
      <SectionFirst />
      <SectionAbout about={about} />
      <SectionSkills skills={skills} />
      <SectionExperience experience={experience} education={education} />
      <SectionPortfolio />
      <SectionFillers />
      <SectionExpectations />
      <SectionProjects projects={projects} />
      <SectionContact />
      <SectionFooter version={version} />
    </main>
  );
}
