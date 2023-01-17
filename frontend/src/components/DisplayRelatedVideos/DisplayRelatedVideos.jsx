const DisplayRelatedVideos = ({ video }) => {
  return (
    <div>
        <li style={{ margin: "1em"}}>{video.snippet.title}</li>
        <img
          id="ytplayer"
          type="text/html"
          width="320"
          height="180"
          src={video.snippet.thumbnails.high.url}
          frameBorder="0"
        />
    </div>
  );
};

export default DisplayRelatedVideos;
