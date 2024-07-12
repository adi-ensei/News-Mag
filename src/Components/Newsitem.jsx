/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import image from "../assets/news.jpg";
// eslint-disable-next-line react/prop-types
const Newsitem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        alt={title}
        style={{
          height: "200px",

          objectFit: "cover",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? // eslint-disable-next-line react/prop-types
              description.slice(0, 90)
            : "Probabilty of raining in bhopal is high overnight today"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};
export default Newsitem;
