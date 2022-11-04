const YouTubePage = (props) => {



    const [videoData, setVideoData] = useState([]);

  
    useEffect(() => {
      getSearchResults();
    }, []);
   
  
   const getSearchResults = async (searchTerm="philadelphia eagles") => {
        try {
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=5`,);        
          setVideoData(response.data.items);
          console.log("YouTube API request ran")
          console.log(response.data.items)
        } catch (error) {
          console.log(error.response.data);
        }
      };


    return (     
    <div className="container">
    {/* <Link to="/addcomment">Add Comment</Link> will want to link to video page from thumbnail */} 
    {videoData &&
      videoData.map((video) => (
        <li key={video.id.videoId}>
          <Link to={`/video/${video.id.videoId}`} >
          <li><img id="ytplayer" type="text/html" width="640" height="360" 
            src={video.snippet.thumbnails.high.url}
            frameBorder="0"/>   
          </li>         
          <li>{video.snippet.title}</li>
          <li>{video.snippet.description}</li>
        </Link>
        </li>
      ))}
</div> );
}
 
export default YouTubePage;