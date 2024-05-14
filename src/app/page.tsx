import MainNavigation from "~/app/_components/MainNavigation";
import SectionFirst from "~/app/_components/SectionFirst";

export default async function Home() {
  return (
    <main className="page_container">
      <MainNavigation />
      <SectionFirst />
    </main>
  );
}
