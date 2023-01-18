import { Link } from "react-router-dom";

const DisplayRelatedVideos = ({ video }) => {
  return (
    <div>
      <Link to={`/video/${video.id.videoId}`}>
        <li style={{ margin: "1em"}}>{video.snippet.title}</li>
        <img
          id="ytplayer"
          type="text/html"
          width="320"
          height="180"
          src={video.snippet.thumbnails.high.url}
          frameBorder="0"
        />
        </Link>
    </div>
  );
};

export default DisplayRelatedVideos;
