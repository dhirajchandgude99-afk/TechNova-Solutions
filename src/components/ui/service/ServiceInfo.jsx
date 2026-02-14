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
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has leap survive not
                    only five centurie, but also the leap into electronic
                    typesetting, remaining essentiall dolor unchange Lorem ipsum
                    dolor sit amet consec tetur adipis icing elit.
                  </p>
                </div>
                <div className="info-part mb-0">
                  <h4>Services All Details</h4>
                  <p className="mb-4">
                    Cast obscure badger jeep quail congenialy when changed as
                    cat jeepers affectionate thus facilisi goodness this far
                    like ipsum dolor sit amet, consectetur adipisicing elits sed
                    do eiusmod tempo et incididunt et laboret dolore magna
                    aliqua enim ad minim. Eveniet in vulputate velit esse
                    molestie consequat, illum dolore eu feugiat nulla facilisis
                    at seds eros sed accumsan.
                  </p>
                  <ul className="info-list">
                    <li>Aliquam Eros Justo, Posuere Loborti Robart That</li>
                    <li>Fermentum Ullamcorper Viverra Laoreet</li>
                    <li>Lobortis, Viverra Laoreet Augue Attis Hrculies</li>
                    <li>Fermentum Ullamcorper Viverra Laoreet</li>
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
