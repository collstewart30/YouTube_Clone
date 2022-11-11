const DisplayRelatedVideos = ({ video }) => {
  return (
    <div>
      <li>
        <li>{video.snippet.title}</li>
        <img
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={video.snippet.thumbnails.high.url}
          frameBorder="0"
        />
      </li>
    </div>
  );
};

export default DisplayRelatedVideos;
