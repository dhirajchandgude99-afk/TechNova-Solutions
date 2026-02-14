export default function ContactMap() {
  return (
    <section className="contact-map-sec">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col">
            <div className="contact-map-location">
              <iframe
                src="https://maps.app.google/Bs56kppWwGf1fTQZA"
                width="100%"
                height={650}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
