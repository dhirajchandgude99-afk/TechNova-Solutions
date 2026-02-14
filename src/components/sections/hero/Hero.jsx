import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const peoples = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1615109398623-88346a601842?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=400&h=500&fit=crop",
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Video Modal Handler
  const videoOpenHandler = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="hero-sec bg-green hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="hero-tagline text-teal">
                  VibeInScript Technologies.
                </span>
                <h1 className="hero-title text-white">
                  Transforming Ideas Into Powerful Digital Solutions
                </h1>
                <p className="text-white">
                  We design, build, and deploy scalable software, cloud infrastructure,
                  and automation systems that help businesses grow faster and smarter.
                </p>
                <div className="hero-btn-area d-flex align-items-center">
                  <Link to="/about" className="thm-btn">
                    <span className="txt">Read More</span>
                  </Link>
                  <a to="#" onClick={videoOpenHandler} className="play-btn">
                    <i className="fas fa-play" />
                  </a>
                  <span className="play-intro">Play Intro</span>
                </div>
                <div className="hero-team-info d-flex align-items-center">
                  <div className="team-members d-flex">
                    {peoples?.map((item, i) => (
                      <div key={i} className="team-members-img">
                        <img src={item} alt="profile" width={50} height={50} />
                      </div>
                    ))}
                  </div>
                  <div className="total-team-count">
                    <span>36k+</span>
                    <p>Team Members</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-images hero-style1">
                <div className="hero-feature-img feature-one br-style1">
                  <img
                    className="br-style1 h-100"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                    alt="hero-img"
                    width={500}
                    height={400}
                  />
                </div>
                <div className="hero-info-img feature-two">
                  <img src="https://plus.unsplash.com/premium_photo-1682310075673-b408eb1ca6fd?w=500&auto=format&fit=crop" alt="hero-img" width={200} height={200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* youtube modal part start */}
      <ModalVideo
        channel="youtube"
        isOpen={isModalOpen}
        videoId="GGf1JjSAKP4"
        onClose={() => setIsModalOpen(false)}
        youtube={{
          autoplay: 1,
          mute: 1,
        }}
      />
      {/* youtube modal part end */}
    </>
  );
}
