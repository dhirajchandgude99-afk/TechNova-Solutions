import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-sec sec-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-images">
              <div
                className="sec-img-one overflow-hidden wow fadeInLeft"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661774953651-d4f658a7e34d?w=500&auto=format&fit=crop"
                  alt="about-img"
                  className="h-100"
                  width={350}
                  height={400}
                />
              </div>
              <div
                className="sec-img-two overflow-hidden wow fadeInRight"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?w=500&auto=format&fit=crop"
                  alt="about-img"
                  className="h-100"
                  width={280}
                  height={320}
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 tab-col-gap wow fadeInUp"
            data-wow-delay="500ms"
            data-wow-duration="1500ms"
          >
            <div className="sec-content">
              <h6 className="sec-sub-title">About Your Company</h6>
              <h2 className="sec-title">
                VibeInScript Tech Innovation LLP is a modern technology company focused on delivering reliable,
                scalable, and innovative digital solutions.
              </h2>
              <p className="sec-text">
                We help startups, small businesses, and enterprises turn their ideas
                into production-ready applications using cutting-edge technologies
                like Cloud Computing, DevOps, Web Development, and Automation.
              </p>
              <ul className="sec-list-item">
                <li>
                  <i className="fa-solid fa-square-check" />
                   Build smart systems that save time.
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                   Reduce costs.
                </li>
                <li>
                  <i className="fa-solid fa-square-check" />
                   Drive growth.
                </li>
              </ul>
              <div className="sec-btn">
                <Link to="/about" className="thm-btn">
                  <span className="txt">Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
