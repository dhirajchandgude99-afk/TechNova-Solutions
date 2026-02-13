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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
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
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=350&h=400&fit=crop"
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
