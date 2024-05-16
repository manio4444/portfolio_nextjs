export interface ExperienceItem {
  title: string;
  datetimeTag: string;
  datetimeText: string;
  description: string;
  subprojects?: { title: string; description: string; tags?: string[] }[];
}
const experience: { data: ExperienceItem[] } = {
  data: [
    {
      title: "Edge One Solutions",
      datetimeTag: "2020",
      datetimeText: "2020 - obecnie",
      description: "Zdalnie 100%.",
      subprojects: [
        {
          title: "Twój e-PIT, Ministerstwo Finansów",
          description:
            "Praca przy migracji aplikacji z vue2 do wersji vue3, otypowanie kodu przy pomocy TypeScript, oraz dostosowanie konfiguracji do nowego sezonu rozliczeniowego. ",
          tags: ["JavaScript", "TypeScript", "Vue"],
        },
        {
          title: "Allegro.pl",
          description:
            "Utrzymanie architektury mikrofrontendów allegro.pl, refaktoryzacja panelu konfiguracyjnego Regulaminu Zwrotów dla Sprzedawcy, dostosowanie kilku komponentów do pracy na platformie allegro.cz, utworzenie nowego wewnętrznego panelu administracyjnego do wyszukiwania i zarządzania instancjami zwrotów, rozwijanie wewnętrznego panelu administracyjnego rozliczeń przewoźników.",
          tags: [
            "React",
            "Redux",
            "Micro Frontends Architecture",
            "TypeScript",
            "GraphQL",
          ],
        },
        {
          title: " Mubi.pl",
          description:
            " Rozwój zupełnie nowej aplikacji do tworzenia raportów sprzedaży dla ubezpieczycieli i wyświetlania zaawansowanych wykresów, React, TS, REST, Material UI",
          tags: ["React", "Redux", "TypeScript", "REST", "Echarts"],
        },
        {
          title: "TaskRabbit",
          description:
            "Projekt utrzymanioworozwojowy dla TaskRabbit, polegający na dodaniu nowych funkcjonalności do istniejącej aplikacji webowej umożliwiającej zamawianie usług typu user-to-user takich jak sprzątanie, montaż mebli",
          tags: ["React", "Redux", "TypeScript", "REST"],
        },
        {
          title: "chroma.pl",
          description:
            "Utrzymanie platformy e-commerce do projektowania i zamawiania wydruków w drukarni dla klientów B2B. Dodatkowo utrzymanie i rozwój platform resellerskich podpiętych do serwisów chroma.",
          tags: ["React", "Redux", "REST"],
        },
      ],
    },
    {
      title: "intive GmbH - Software Engineer",
      datetimeTag: "2019",
      datetimeText: "2019 - 2020",
      description:
        "Stacjonarnie (Software House). Praca jako Front End Developer przy kilku dużych aplikacjach webowych w JavaScript (React/Vue.js) oraz aplikacji mobilnej (React Native). Zakres prac w większości polegał na developmencie, częściowo też mainteance/refactor/bugfixing, zależnie od projektu.",
    },
    {
      title: "createIT - Front End Developer",
      datetimeTag: "2018",
      datetimeText: "2018 - 2019",
      description:
        "Stacjonarnie (Software House). Po zakończeniu projektu outsourcingowego, czekając na następny duży projekt, pracowałem w dziale projektów wewnętrznych. Zakres prac: głównie tworzenie mniejszych stron od podstaw na platformie WordPress, support stron klientów, bugfixing, okresowo outsourcing na kilka dni do nieco większego projektu.",
    },
    {
      title: "top concepts GmbH - Front End Developer",
      datetimeTag: "2017",
      datetimeText: "2017 - 2018",
      description:
        "Praca zdalna, ale stacjonarnie w biurze w Warszawie (outsourcingowy) poprzez createIT. Do głównych zadań należało bieżące utrzymanie dużych niemieckich sklepów opartych na platformie e-commerce OXID, tj. tworzenie nowych modułów JavaScript, widoków Twig/Smarty, funkcjonalności, ścisła współpraca z programistami back-end w zakresie bieżących zadań.",
    },
    {
      title: "Kinga Nowicka Design - Full Stack Developer",
      datetimeTag: "2017",
      datetimeText: "2017 - obecnie",
      description:
        'Praca zdalna, wynikiem współpracy z panią Kingą jest stworzenie od podstaw i utrzymanie sklepu internetowego dużej marki modowej - <a href="https://kossmann.com.pl/">Kossmann</a>, oraz utrzymanie sklepu <a href="https://sowlofficial.com/">Sowlofficial</a> i kilka mniejszych projektów.',
    },
    {
      title: "bcweb - Front End Developer",
      datetimeTag: "2016",
      datetimeText: "2016 - 2017",
      description:
        "Praca stacjonarna, w tej firmie miałem możliwość konfrontacji swoich umiejętności z prawdziwym stanowiskiem Front End Developera, oraz nauczyłem się używać najnowszych narzędzi ułatwiających pracę, choć moje obowiązki bardziej można było opisać jako Full Stack, gdyż dużo zadań wymagało pisania dodatkowych funkcjonalności w języku PHP, SQL, lub edytowania back-end'u systemów CMS.",
    },
    {
      title: "Studiocitrus, Agencja interaktywna - Founder",
      datetimeTag: "2015",
      datetimeText: "2015",
      description:
        "Marka, którą stworzyłem i sam obsługiwałem, wykorzystując zdobyte w innych miejscach pracy umiejętności miękkie, marketingowe i sprzedażowe. Sam byłem accountem, programistą, czasami też grafikiem, jeśli nie zlecałem wykonywania projektów grafikowi.",
    },
    {
      title: "Studio reklamy MadMelon - Programista stron internetowych",
      datetimeTag: "2014",
      datetimeText: "2014",
      description:
        "Praca zdalna, to w tej firmie miałem pierwszy komercyjny kontakt z branżą, zajmowałem się kodowaniem projektów stron internetowych, wynikiem współpracy było kilka projektów, głównie w technologii HTML, CSS.",
    },
  ],
};
export default experience;