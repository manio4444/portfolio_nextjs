import { type FunctionComponent, type SVGProps } from "react";

import {
  Css3,
  Html5,
  UpRightAndDownLeftFromCenter,
} from "~/app/_components/FontAwesome6Icons";
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
  cssClassName?: string;
  stars: string;
  svg?: FunctionComponent<SVGProps<HTMLOrSVGElement>>;
}

const skills: { data: Skill[] } = {
  data: [
    {
      title: "HTML5",
      cssClassName: "icon--padding-big",
      stars: "●●●●●",
      svg: Html5,
    },
    {
      title: "CSS3",
      cssClassName: "icon--padding-big",
      stars: "●●●●●",
      svg: Css3,
    },
    {
      title: "SASS, LESS",
      cssClassName: "icon--noborder",
      stars: "●●●●●",
      // eslint-disable-next-line @next/next/no-img-element
      svg: Svgsass,
    },
    {
      title: "Styled components",
      stars: "●●●●●",
      svg: Svgstyled,
    },
    {
      title: "Bootstrap, Semantic, Material UI",
      cssClassName: "icon--padding-big",
      stars: "●●●●●",
      svg: Svgmaterial,
    },
    {
      title: "Responsive Web Design",
      cssClassName: "icon--padding-superbig",
      stars: "●●●●●",
      svg: UpRightAndDownLeftFromCenter,
    },
    {
      title: "JavaScript",
      cssClassName: "icon--noborder",
      stars: "●●●●●",
      svg: Svgjavascript,
    },
    {
      title: "TypeScript",
      cssClassName: "icon--noborder",
      stars: "●●●●○",
      svg: Svgtypescript,
    },
    {
      title: "React",
      cssClassName: "icon--stroke-color",
      stars: "●●●●●",
      svg: Svgreact,
    },
    {
      title: "Redux",
      cssClassName: "icon--padding-big",
      stars: "●●●●○",
      svg: Svgredux,
    },
    {
      title: "REST API",
      cssClassName: "icon--padding-big",
      stars: "●●●●●",
      svg: Svgapi,
    },
    {
      title: "Cypress",
      cssClassName: "icon--noborder",
      stars: "●●●●○",
      svg: Svgcypress,
    },
    {
      title: "Jest, Testing Library",
      cssClassName: "icon--padding-big",
      stars: "●●●○○",
      svg: Svgjest,
    },
    {
      title: "Git, Svn",
      stars: "●●●●●",
      svg: Svggit,
    },
    {
      title: "Grunt, Gulp, Webpack",
      stars: "●●●●●",
      svg: Svggulp,
    },
    {
      title: "Vagrant, Docker",
      cssClassName: "icon--padding-small",
      stars: "●●●●○",
      svg: Svgdocker,
    },
    {
      title: "Windows, MacOS, Linux",
      stars: "●●●●●",
      svg: Svglinux,
    },
    {
      title: "VMware, VirtualBox",
      stars: "●●●●○",
      svg: Svgvmware,
    },
    {
      title: "PHP",
      stars: "●●●○○",
      svg: Svgphp,
    },
    {
      title: "Smarty, Twig",
      cssClassName: "icon--twig",
      stars: "●●●●●",
    },
    {
      title: "Npm, Yarn",
      stars: "●●●●●",
      svg: Svgnpm,
    },
    {
      title: "SQL",
      stars: "●●●◐○",
      svg: Svgmysql,
    },
    {
      title: "Invision, Zeplin, Figma",
      cssClassName: "icon--padding-superbig",
      stars: "●●●●●",
      svg: Svginvision,
    },
    {
      title: "Photoshop",
      cssClassName: "icon--padding-small",
      stars: "●●◐○○",
      svg: Svgadobephotoshop,
    },
  ],
};
export default skills;
