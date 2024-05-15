export default function SectionPortfolio() {
  return (
    <section id="section_portfolio" className="page_section print-only">
      <div className="wrapper">
        <div className="section_expectations_desc">
          <h2 className="heading">Portfolio</h2>
          <p>
            Link do portfolio:{" "}
            <a href="http://portfolio.studiocitrus.pl/" target="_blank">
              portfolio.studiocitrus.pl
            </a>
          </p>
          <img
            src="/img/qr.svg"
            className="section_portfolio_qr"
            alt="QR kod do portfolia"
          />
        </div>
      </div>
    </section>
  );
}
