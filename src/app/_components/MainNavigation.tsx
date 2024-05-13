export default function MainNavigation() {
  const navigation = [
    { href: "#section_about", value: "O mnie" },
    { href: "#section_skills", value: "Umiejętności" },
    { href: "#section_experience", value: "Doświadczenie" },
    { href: "#section_projects", value: "Projekty" },
    { href: "#section_contact", value: "Kontakt" },
  ];
  return (
    <nav id="main_navigation" className="screen-only">
      <button className="hamburger hamburger--squeeze" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <ul className="main_navigation_list">
        {navigation.map((item) => (
          <li className="main_navigation_list_el" key={item.href}>
            <a href={item.href}>{item.value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
