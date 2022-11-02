// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCommentPage from "./pages/AddCommentPage/AddCommentPage";
import YouTubePage from "./pages/YouTubePage/YouTubePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar"

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


import {KEY} from "./localKey";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";


function App(props) {

  const [videos, setVideos] = useState([]);
  // const [filteredVideos, setFilteredVideos] = useState()

  // useEffect(() =>{
  //   getAllVideos();
  // }, []);

//   async function getAllVideos(){
//     let responseGet = await axios.get('https://www.googleapis.com/youtube/v3/search?q=${filteredVideos}');
//     console.log(responseGet.data);
//     setVideos(responseGet.data.results)
//  }  

//  function searchBar(searchTerm){
 
//   let filteredVideos = videos.filter(function(video){
//       if(video.title.includes(searchTerm) ){  // || video.artist.includes(searchTerm) || video.album.includes(searchTerm) || video.release_date.includes(searchTerm) || video.genre.includes(searchTerm)
//       return true
//       }
//     }
//   )
//     setVideos(filteredVideos)    
//  }



  return (
    <div>
      <Navbar />
      <div>
        <h2>Search Videos </h2>
        {/* <SearchBar searchBarParent={searchBar}/> */}
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/youtube" element={<YouTubePage />} />
        <Route 
          path="/addcomment" 
          element={
            <PrivateRoute>
              <AddCommentPage />
            </PrivateRoute>} 
            />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
