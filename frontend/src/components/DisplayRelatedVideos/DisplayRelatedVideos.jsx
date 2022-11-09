const DisplayRelatedVideos = ({ video }) => {
  return (
    <div>
      <h1>RELATED VIDEOS HERE</h1>
      <li>
        <img
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={video.snippet.thumbnails.high.url}
          frameBorder="0"
        />
      </li>
      <li>{video.snippet.title}</li>
    </div>
  );
};

export default DisplayRelatedVideos;
