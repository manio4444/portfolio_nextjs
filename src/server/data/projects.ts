export interface Project {
  key: string;
  title: string;
  date: number;
  client: string;
  technologies: string;
  scope: string;
  link: string;
}

const projects: { data: Project[] } = {
  data: [
    {
      key: "magicphotography",
      title: "Magicphotography",
      date: 2014,
      client: "MadMelon",
      technologies: "Użyte technologie: HTML5, CSS3, jQuery",
      scope: "Zakres prac: Stworzenie od podstaw",
      link: "http://magicphotography.pl/",
    },
    {
      key: "valdiexpress",
      title: "Valdiexpress",
      date: 2016,
      client: "bcweb",
      technologies: "Użyte technologie: HTML5, CSS3, jQuery, Vue.js",
      scope: "Zakres prac: Stworzenie od podstaw",
      link: "http://valdiexpress.pl/",
    },
    {
      key: "mariostinyhouses",
      title: "Mariostinyhouses",
      date: 2017,
      client: "bcweb",
      technologies: "Użyte technologie: HTML5, CSS3, jQuery",
      scope: "Zakres prac: Stworzenie od podstaw",
      link: "http://produkcja.bcweb.com.pl/mariotinyhouses/2017-05-26/",
    },
    {
      key: "grupahalo",
      title: "Grupahalo",
      date: 2017,
      client: "bcweb",
      technologies: "Użyte technologie: HTML5, CSS3, JS, jQuery",
      scope: "Zakres prac: Stworzenie od podstaw",
      link: "http://strojedlahostess.pl/",
    },
    {
      key: "q-gain",
      title: "Q-gain",
      date: 2017,
      client: "bcweb",
      technologies:
        "Sklep internetowy. Użyte technologie: HTML5, CSS3, JS, jQuery, QuickCart",

      scope: "Zakres prac: Stworzenie od podstaw",
      link: "http://produkcja.bcweb.com.pl/q-gain.com/q-gain.com_2017-07-31/",
    },
    {
      key: "nordic_care",
      title: "Nordic care",
      date: 2017,
      client: "bcweb",
      technologies: "Użyte technologie: HTML5, CSS3, JS, jQuery",
      scope: "Zakres prac: Stworzenie od podstaw",
      link: "http://nordiccare.pl/",
    },
    {
      key: "espol",
      title: "Espol",
      date: 2017,
      client: "bcweb",
      technologies: "Użyte technologie: HTML5, CSS3, JS, jQuery",
      scope: "Zakres prac: Stworzenie od podstaw",
      link: "http://produkcja.bcweb.com.pl/espol/2017-09-18_espol/",
    },
    {
      key: "kossmann",
      title: "Kossmann",
      date: 2017,
      client: "Kinga Nowicka Design",
      technologies: "Użyte technologie: HTML5, CSS3, JS, jQuery, QuickCart",
      scope:
        "Zakres prac: Stworzenie od podstaw sklepu internetowego, oraz utrzymanie.",
      link: "http://kossmann.com.pl/",
    },
    {
      key: "sowlofficial",
      title: "Sowlofficial",
      date: 2017,
      client: "Kinga Nowicka Design",
      technologies: "Użyte technologie: HTML5, CSS3, jQuery, QuickCart",
      scope:
        "Zakres prac: Utrzymanie, częściowy redesign i support obecnego sklepu na systemie QuickCart.",
      link: "https://sowlofficial.com/",
    },
    {
      key: "cortexpower",
      title: "cortexpower.de",
      date: 2017,
      client: "top concepts GmbH",
      technologies: "Użyte technologie: HTML5, CSS3, JS, jQuery, OXID, Smarty",

      scope: "Zakres prac: Redesign platformy e-commerce, do obecnego designu.",
      link: "https://www.cortexpower.de/",
    },
    {
      key: "hgtv",
      title: "HGTV DE",
      date: 2019,
      client: "Intive GmbH",
      technologies: "Użyte technologie: JavaScript, React, Node",
      scope:
        "Zakres prac: Stworzenie webowej aplikacji VOD brandu HGTV na rynek niemiecki, na podstawie VOD stworzonego przez Discovery",
      link: "https://de.hgtv.com/",
    },
    {
      key: "heathrowexpress",
      title: "Heathrow Express",
      date: 2019,
      client: "Intive GmbH",
      technologies: "Użyte technologie: JavaScript, Vue.js, jQuery, ASP.NET",
      scope:
        "Zakres prac: Końcowy etap developmentu, głównie bugfixing oraz ostatnie zmiany w designach przed go live. Aplikacja służy do zamawiania biletów pociągowych, pomiędzy dwoma Londyńskimi lotniskami.",
      link: "https://www.heathrowexpress.com/",
    },
  ],
};
export default projects;
