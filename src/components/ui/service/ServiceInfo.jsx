import ServiceDetailsSidebar from "./ServiceDetailsSidebar";

export default function ServiceInfo() {
  return (
    <section className="service-details sec-ptb">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="service-details-wrapper">
              <div className="feature-img">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                  alt="feature"
                  className="h-100"
                  width={500}
                  height={350}
                />
              </div>
              <div className="service-details-content">
                <div className="info-part">
                  <h2
                    className="sec-title wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1500ms"
                  >
                    Service Overview
                  </h2>
                  <p className="mb-4">
                    We offer a full range of IT services designed to help businesses leverage technology for growth,
                    efficiency, and competitive advantage. Our team specializes in delivering reliable, scalable,  and secure
                    digital solutions tailored to meet the unique needs of startups, small businesses, and enterprise clients.
                    From initial consultation to deployment and ongoing support, we provide end-to-end technology services 
                    that streamline business operations and improve productivity. Our expertise includes custom software development,
                    modern and responsive website design, high-performance mobile application development,
                    and intelligent AI-driven solutions that automate processes and enhance decision-making.
                  </p>
                  <p>
                    Beyond development, we provide continuous technical support, maintenance, and upgrades to keep your systems updated
                    and running efficiently. Our client-focused approach emphasizes clear communication, on-time delivery,
                    and long-term partnerships, ensuring that your technology infrastructure evolves alongside your business.
                  </p>
                </div>
                <div className="info-part">
                  <h4>Service Center</h4>
                  <p className="mb-4">
                    Our Service Center is dedicated to providing reliable, fast,and professional and professional
                    technical assistance to ensure your business systems operate smoothly at all times.
                    We offer centralized support for all IT-related needs, including troubleshooting,
                    system maintenance, software updates, performance monitoring, and user assistance.
                    With a customer-first approach, our service center ensures quick response times,
                    efficient issue resolution, and proactive system management to minimize downtime
                    and maximize productivity. Our skilled support team handles everything from minor
                    technical queries to complex infrastructure challenges, ensuring your technology
                    remains secure, updated, and optimized.
                  </p>
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div
                        className="info-part-img wow fadeInUp"
                        data-wow-delay="0.5s"
                        data-wow-duration="1500ms"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1587702068694-a909ef4aa346?w=500&auto=format&fit=crop"
                          alt="feature"
                          className="h-100"
                          width={280}
                          height={300}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                      <div
                        className="info-part-img wow fadeInUp"
                        data-wow-delay="0.8s"
                        data-wow-duration="1500ms"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?w=500&auto=format&fit=crop"
                          alt="feature"
                          className="h-100"
                          width={280}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                  <p>
                    We focus on delivering continuous support, transparent communication,
                    and dependable service so you can concentrate on your core business 
                    while we take care of your technology. Whether it’s remote assistance,
                    scheduled maintenance, or emergency support, our Service Center is
                    committed to keeping your digital operations running efficiently and
                    without interruption.
                  </p>
                </div>
                <div className="info-part mb-0">
                  <h4>Services All Details</h4>
                  <p className="mb-4">
                    We provide comprehensive IT services designed to help businesses grow
                    through reliable technology solutions. Our offerings include software,
                    web, and mobile app development, AI-driven solutions, cloud deployment,
                    database management, and ongoing technical support. We focus on delivering 
                    secure, scalable, and user-friendly systems that improve efficiency, 
                    enhance customer experience, and support long-term digital success.
                  </p>
                  <ul className="info-list">
                    <li>Customized Solutions : Services tailored to meet your specific business needs and goals.</li>
                    <li>Modern & Scalable Technology : Built using the latest tools to ensure performance, security, and future growth.</li>
                    <li>Security & Reliability : Strong security practices and stable architectures ensure safe and dependable performance.</li>
                    <li>End-to-End Support : From planning and development to deployment and maintenance, we provide complete lifecycle support.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <ServiceDetailsSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
