import "./Moviecard.css";

export const Moviecard = ({ movie }) => {
  const { title, release_date, backdrop_path } = movie;
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img src={`${baseImageUrl}${backdrop_path}`} alt={movie.path} />
      </div>
      <div>
        <span className="location">{release_date}</span>
      </div>
      <div>
        <span className="title">{title}</span>
      </div>
    </div>
  );
};
