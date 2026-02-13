import { Link } from "react-router-dom";

const socials = [
  {
    icon: "fa-brands fa-facebook-f",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    link: "https://www.linkedin.com/company/vibeinscript-tech-innovation-llp/",
  },
  {
    icon: "fa-brands fa-twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/",
  },
];

export default function GetTouch() {
  return (
    <div className="sec-content">
      <h2 className="sec-title">Get In Touch</h2>
      <p>
        These are the phrases we stay via way of means of in the whole lotwe do.
        Each brand we build, and we create.
      </p>
      <div className="get-in-touch">
        {/* project-qinfo */}
        <div className="qinfo-item">
          {/* qinfo-item-1 */}
          <div className="qinfo-icon">
            <i className="flaticon-maps-and-flags" />
          </div>
          <div className="qinfo-box">
            <h5>Location</h5>
            <Link to="/">H.NO  711,Loni Kalbhor, Haveli, Pune, Maharashtra. Pin- 412201</Link>
          </div>
        </div>
        <div className="qinfo-item">
          {/* qinfo-item-2 */}
          <div className="qinfo-icon">
            <i className="flaticon-call" />
          </div>
          <div className="qinfo-box">
            <h5>Call Now</h5>
            <Link to="tel:+91 9423788706">+91 9423788706</Link>
            
          </div>
        </div>
        <div className="qinfo-item mb-0">
          {/* qinfo-item-3 */}
          <div className="qinfo-icon">
            <i className="flaticon-gmail-logo" />
          </div>
          <div className="qinfo-box">
            <h5>Email Us</h5>
            <Link to="mailto:support@vibeinscript.com">support@vibeinscript.com</Link>
          </div>
        </div>
      </div>
      <div className="company-social d-flex">
        {/* social part start */}
        {socials.map((item, i) => (
          <Link key={i} to={item.link} target="_blank">
            <i className={item.icon} />
          </Link>
        ))}
        {/* social part end */}
      </div>
    </div>
  );
}
