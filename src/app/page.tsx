import MainNavigation from "~/app/_components/MainNavigation";
import SectionFirst from "~/app/_components/SectionFirst";
import SectionAbout from "~/app/_components/SectionAbout";
import about from "~/server/data/about.json";
import SectionSkills from "~/app/_components/SectionSkills";
import skills from "~/server/data/skills";
import SectionExperience from "~/app/_components/SectionExperience";
import SectionPortfolio from "~/app/_components/SectionPortfolio";
import SectionFillers from "~/app/_components/SectionFillers";
import SectionExpectations from "~/app/_components/SectionExpectations";
import SectionProjects from "~/app/_components/SectionProjects";
import SectionContact from "~/app/_components/SectionContact";
import SectionFooter from "~/app/_components/SectionFooter";

export default function Home() {
  return (
    <main className="page_container">
      <MainNavigation />
      <SectionFirst />
      <SectionAbout about={about} />
      <SectionSkills skills={skills} />
      {/*<SectionExperience />*/}
      {/*<SectionPortfolio />*/}
      {/*<SectionFillers />*/}
      {/*<SectionExpectations />*/}
      {/*<SectionProjects />*/}
      {/*<SectionContact />*/}
      {/*<SectionFooter />*/}
    </main>
  );
}
