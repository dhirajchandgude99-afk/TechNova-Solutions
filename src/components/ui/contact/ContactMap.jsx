export default function ContactMap() {
  return (
    <section className="contact-map-sec">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col">
            <div className="contact-map-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.9308249885325!2d73.82036807423962!3d18.609673666448348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b5631828cb%3A0x6370d884949e3645!2sGera&#39;s%20Imperium%20Gateway!5e1!3m2!1sen!2sin!4v1771095695624!5m2!1sen!2sin"
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
