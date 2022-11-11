const DisplaySearchResults = ({searched}) => {
  return (
    <div>
        <li>{searched.snippet.title}</li>
        <img
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={searched.snippet.thumbnails.high.url}
          frameBorder="0"
        />
        <li>{searched.snippet.description}</li>
    </div>
  );
};

export default DisplaySearchResults;
