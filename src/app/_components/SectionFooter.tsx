interface ISectionFooterProps {
  version: string;
}

export default function SectionFooter({ version }: ISectionFooterProps) {
  return (
    <footer id="section_footer" className="page_section">
      <div className="wrapper wrapper--section_footer">
        <p className="section_footer_copyright screen-only">
          Copyright &copy; {new Date().getFullYear()} Wszelkie prawa
          zastrzeżone. v{version}
        </p>
        <p className="section_footer_agreement print-only">
          Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w
          ofercie pracy dla potrzeb procesu rekrutacji zgodnie z ustawą z dnia
          27.08.1997r. Dz. U. z 2002 r., Nr 101, poz. 923 ze zm.
        </p>
      </div>
    </footer>
  );
}
