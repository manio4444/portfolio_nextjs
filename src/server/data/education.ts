export interface EducationItem {
  title: string;
  datetimeTag: string;
  datetimeText: string;
  description: string;
}

const education: {data: EducationItem[]} = {
  data: [
    {
      title: "Warszawska Szkoła Reklamy - Realizacja telewizyjna i filmowa",
      datetimeTag: "2015",
      datetimeText: "2013 - 2015",
      description:
        "W Warszawskiej Szkole Reklamy rozwijałem swoje hobby, które miało być moim przyszłym zawodem - operatorka. Poza zajęciami z montażu ćwiczeniami operatorki czy plenerach filmowych, w których chętnie brałem udział, nabyłem sporo ogólnej wiedzy z zakresu marketingu.",
    },
    {
      title: "ZS nr.1 w Mińsku Mazowieckim - Technik informatyk",
      datetimeTag: "2011",
      datetimeText: "2007 - 2011",
      description: "Tytuł potwierdzony dyplomem",
    },
  ],
};
export default education;
