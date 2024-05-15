export default function SectionContact() {
  return (
    <section id="section_contact" className="page_section">
      <div className="wrapper wrapper--section_contact">
        <h2 className="heading">Kontakt</h2>
        <p className="section_contact_desc">
          Jeśli podoba się Państwu moje portfolio i jesteście zainteresowani
          współpracą bądź macie dodatkowe pytania gorąco zachęcam do
          skorzystania z poniższego formularza kontaktowego. Chętnie zapoznam
          się i rozważę każdą popozycję.
        </p>
        <form
          action="send.php"
          method="post"
          className="contact_form"
          id="contact_form"
        >
          <input
            type="text"
            name="contact_name"
            placeholder="Imię, Nazwisko, nazwa firmy"
            required
          />
          <input
            type="email"
            name="contact_email"
            placeholder="E-mail kontaktowy"
            required
          />
          <textarea
            name="contact_body"
            placeholder="Treść wiadomości"
            required
          ></textarea>
          <button className="send_btn">Wyślij</button>
          <input type="hidden" name="49f84321e320cba4343bcab725c18149" />
          <input type="hidden" name="b7b564ab232539533b8a357a5f64dff7" />
        </form>
        <div className="section_contact_labels print-only">
          <div className="section_contact_labels_el">
            <i className="fa fa-phone"></i>
            <span>+48 512 260 969</span>
          </div>
          <div className="section_contact_labels_el">
            <i className="fa fa-envelope"></i>
            {/*TODO: secure email below*/}
            <span>kalinowskixmarcin@o2.pl</span>
          </div>
        </div>
      </div>
    </section>
  );
}
