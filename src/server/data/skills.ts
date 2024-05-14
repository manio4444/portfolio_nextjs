import { FunctionComponent, SVGProps } from "react";

import Svgsass from "~/svg/skills/sass.svg";
import Svgstyled from "~/svg/skills/styled.svg";
import Svgmaterial from "~/svg/skills/material.svg";
import Svgjavascript from "~/svg/skills/javascript.svg";
import Svgtypescript from "~/svg/skills/typescript.svg";
import Svgreact from "~/svg/skills/react.svg";
import Svgredux from "~/svg/skills/redux.svg";
import Svgapi from "~/svg/skills/rest-api.svg";
import Svgcypress from "~/svg/skills/cypress.svg";
import Svgjest from "~/svg/skills/jest.svg";
import Svggit from "~/svg/skills/git.svg";
import Svggulp from "~/svg/skills/gulp.svg";
import Svgdocker from "~/svg/skills/docker.svg";
import Svglinux from "~/svg/skills/linux.svg";
import Svgvmware from "~/svg/skills/vmware.svg";
import Svgphp from "~/svg/skills/php.svg";
import Svgnpm from "~/svg/skills/npm.svg";
import Svgmysql from "~/svg/skills/mysql.svg";
import Svginvision from "~/svg/skills/invision.svg";
import Svgadobephotoshop from "~/svg/skills/adobephotoshop.svg";

export interface Skill {
  title: string;
  cssClassName: string;
  stars: string;
  svg?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const skills: { data: Skill[] } = {
  data: [
    {
      title: "HTML5",
      cssClassName: "icon--hmtl icon--fa",
      stars: "●●●●●",
    },
    {
      title: "CSS3",
      cssClassName: "icon--css icon--fa",
      stars: "●●●●●",
    },
    {
      title: "SASS, LESS",
      cssClassName: "icon--noborder icon--svg",
      stars: "●●●●●",
      // eslint-disable-next-line @next/next/no-img-element
      svg: Svgsass,
    },
    {
      title: "Styled components",
      cssClassName: "icon--svg",
      stars: "●●●●●",
      svg: Svgstyled,
    },
    {
      title: "Bootstrap, Semantic, Material UI",
      cssClassName: "icon--padding-big icon--svg",
      stars: "●●●●●",
      svg: Svgmaterial,
    },
    {
      title: "Responsive Web Design",
      cssClassName: "icon--rwd icon--fa",
      stars: "●●●●●",
    },
    {
      title: "JavaScript",
      cssClassName: "icon--noborder icon--svg",
      stars: "●●●●●",
      svg: Svgjavascript,
    },
    {
      title: "TypeScript",
      cssClassName: "icon--noborder icon--svg",
      stars: "●●●●○",
      svg: Svgtypescript,
    },
    {
      title: "React",
      cssClassName: "icon--react icon--svg",
      stars: "●●●●●",
      svg: Svgreact,
    },
    {
      title: "Redux",
      cssClassName: "icon--padding-big icon--svg",
      stars: "●●●●○",
      svg: Svgredux,
    },
    {
      title: "REST API",
      cssClassName: "icon--padding-big icon--svg",
      stars: "●●●●●",
      svg: Svgapi,
    },
    {
      title: "Cypress",
      cssClassName: "icon--noborder icon--svg",
      stars: "●●●●○",
      svg: Svgcypress,
    },
    {
      title: "Jest, Testing Library",
      cssClassName: "icon--padding-big icon--svg",
      stars: "●●●○○",
      svg: Svgjest,
    },
    {
      title: "Git, Svn",
      cssClassName: "icon--svg",
      stars: "●●●●●",
      svg: Svggit,
    },
    {
      title: "Grunt, Gulp, Webpack",
      cssClassName: "icon--svg",
      stars: "●●●●●",
      svg: Svggulp,
    },
    {
      title: "Vagrant, Docker",
      cssClassName: "icon--svg icon--padding-small",
      stars: "●●●●○",
      svg: Svgdocker,
    },
    {
      title: "Windows, MacOS, Linux",
      cssClassName: "icon--svg",
      stars: "●●●●●",
      svg: Svglinux,
    },
    {
      title: "VMware, VirtualBox",
      cssClassName: "icon--svg",
      stars: "●●●●○",
      svg: Svgvmware,
    },
    {
      title: "PHP",
      cssClassName: "icon--svg",
      stars: "●●●○○",
      svg: Svgphp,
    },
    {
      title: "Smarty, Twig",
      cssClassName: "icon--twig icon--fa",
      stars: "●●●●●",
    },
    {
      title: "Npm, Yarn",
      cssClassName: "icon--svg",
      stars: "●●●●●",
      svg: Svgnpm,
    },
    {
      title: "SQL",
      cssClassName: "icon--svg",
      stars: "●●●◐○",
      svg: Svgmysql,
    },
    {
      title: "Invision, Zeplin, Figma",
      cssClassName: "icon--svg icon--padding-superbig icon--invision",
      stars: "●●●●●",
      svg: Svginvision,
    },
    {
      title: "Photoshop",
      cssClassName: "icon--svg icon--padding-small",
      stars: "●●◐○○",
      svg: Svgadobephotoshop,
    },
  ],
};
export default skills;
