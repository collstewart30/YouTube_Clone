import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";
import { KEY } from "../../localKey";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videoData, setVideoData] = useState([]);
  console.log(user);
  console.log(token);

  useEffect(() => {
    getSearchResults();
  }, [token]);

  

 const getSearchResults = async (searchTerm="philadelphia eagles") => {
      try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyBx7ojL5zulJPz3ZlU03J8I48_br30nUJU&part=snippet&type=video&maxResults=5`, );
        setVideoData(response.data.items);
        console.log("Ran Search Request from homepage")
        console.log(response.data.items)
      } catch (error) {
        console.log(error.response.data);
      }
    };



  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {/* <Link to="/addcomment">Add Comment</Link> will want to link to video page from thumbnail */} 
      {videoData &&
        videoData.map((video) => (
          <p key={video.id.videoId}>
            <iframe id="ytplayer" type="text/html" width="640" height="360" 
              src={video.snippet.thumbnails.high.url}
              frameborder="0"></iframe>
            {video.snippet.title} {video.snippet.description}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
