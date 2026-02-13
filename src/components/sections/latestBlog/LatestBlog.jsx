import { Link } from "react-router-dom";
import { blogs } from "../../../data/site";

export default function LatestBlog({ bg_color }) {
  return (
    <section className={`blog-sec sec-ptb ${bg_color}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sec-content mb-5">
              <h6 className="sec-sub-title">Our Blogs</h6>
              <h2 className="sec-title">Let's Checkout Our All Latest News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="blog-left-box blog-item me-lg-5 wow fadeInLeft"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              {/* blog left box */}
              <div className="img-box">
                <Link to="/blog-details">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=350&fit=crop"
                    alt="blog"
                    className="h-100"
                    width={400}
                    height={300}
                  />
                </Link>
              </div>
              <div className="content-box">
                <div className="meta-box">
                  <ul className="meta-info d-flex">
                    <li>
                      <div className="icon">
                        <i className="flaticon-user" />
                      </div>
                      <span>
                        <Link to="#">Admin</Link>
                      </span>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-calendar" />
                      </div>
                      <span>
                        <Link to="#">Feb 2, 2026</Link>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="title-box">
                  <h3>
                    <Link to="/blog-details">
                      Everything you need to learn about IT Solution for your
                      Company.
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blog-sidebar-box">
              {/* lasted blog part start */}
              <ul>
                {blogs?.slice(0, 3).map((item, i) => (
                  <li
                    key={i}
                    className="blog-sidebar-box-item blog-item d-sm-flex wow fadeInUp"
                    data-wow-delay="500ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="img-box">
                      <Link to="/blog-details">
                        <img src={item.imgUrl} alt="blog" className="h-100" width={100} height={100} />
                      </Link>
                    </div>
                    <div className="content-box">
                      <div className="meta-box">
                        <ul className="meta-info d-flex">
                          <li>
                            <div className="icon">
                              <i className="flaticon-user" />
                            </div>
                            <span>
                              <Link to="#">Admin</Link>
                            </span>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-calendar" />
                            </div>
                            <span>
                              <Link to="#">Jan 26, 2026</Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="title-box">
                        <h3>
                          <Link to="/blog-details">{item.title}</Link>
                        </h3>
                      </div>
                      <div className="btn-box">
                        <Link to="/blog-details" className="read-more">
                          <span className="txt">Read More</span>
                          <i className="flaticon-right-arrow" />
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              {/* lasted blog part end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
