import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import SearchBar from "../../components/SearchBar/SearchBar";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videoData, setVideoData] = useState([]);
  // console.log(user);
  // console.log(token);


  useEffect(() => {
    getSearchResults();
  }, [token]);

  const getSearchResults = async (searchTerm = "philadelphia eagles") => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=5`
      );
      setVideoData(response.data.items);
      console.log("YouTube API request ran");
      console.log(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }
  };


  return (
    <div className="container">
      <h1 className='text-muted'>Welcome, {user.username}!</h1>
      <SearchBar searchBarParent={getSearchResults} />
      {videoData &&
        videoData.map((video) => (
          <div key={video.id.videoId} style={{ margin: "2em"}} className="list-unstyled text-decoration-none">
            <Link to={`/video/${video.id.videoId}`}>
              <li className="text-decoration-none" style={{ margin: "1em"}}>{video.snippet.title}</li>
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
              <li style={{ margin: "1em"}}>{video.snippet.description}</li>
              {/* <h2>{user.username}</h2> */}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default HomePage;

// {videoData &&  videoData.map   VIDEO: Conserving API Requests - && is like an if statement, if videoData has a value, run map, otherwise display nothing
