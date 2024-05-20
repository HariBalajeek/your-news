import image from '../assets/news.png'

const NesItem = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light h-100">
        <img 
          src={src?src:image} 
          className="card-img-top" 
          style={{ height: "200px", objectFit: "cover" }} 
          alt="News Image" 
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description ? description.slice(0, 90) : "News will be provided as soon as possible with details"}
          </p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    );
  };
  
  export default NesItem;
  