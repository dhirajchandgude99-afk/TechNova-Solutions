export default function TestimonialCard({ data }) {
  return (
    <div className="single-testimonial">
      <div className="feedback">
        <div className="rating">
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
          <i className="flaticon-star" />
        </div>
        <p className="comment">
          "The VibeInScript Technology delivered exactly what our business needed.
           Their IT consulting approach was structured, professional, and result-oriented.
           The team understood our requirements quickly and provided scalable solutions. Highly recommended!"
        </p>
      </div>
      <div className="customar-info">
        <div className="customar-img">
          <img src={data.imgUrl} alt="testimonial" width={80} height={80} />
        </div>
        <div className="customar-title">
          <h5>{data.name}</h5>
          <span className="title">{data.title}</span>
        </div>
      </div>
      <div className="com-logo">
        <i className="flaticon-ux" />
      </div>
    </div>
  );
}
