// work on getting your results from the YouTube Data API to appear on your SearchResultsPage
// once SearchResults are working, create an onClick event function handler to allow clicking a video to navigate to the VideoPage
// where the embedded player will show the YouTube video selected

import React, { useEffect } from 'react';
import { useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import { Link, useNavigate, useParams } from "react-router-dom";
import { KEY } from "../../localKey";
import axios from "axios";
import DisplaySearchResults from '../../components/DisplaySearchResults/DisplaySearchResult';

const SearchResultsPage = () => {
    
    const {formData} = useParams();

    const[search, setSearch] = useState();

    useEffect(() => {
        console.log("now we're on the SearchResultsPage")
        // resultsSearchBar();
      }, [formData]);
    
    //   const resultsSearchBar = async (formData) => {
    //     try {
    //       let response = await axios.get(
    //         `https://www.googleapis.com/youtube/v3/search?q=${formData}&key=${KEY}&part=snippet&type=video&maxResults=1`
    //       );
    //       setSearch(response.data.items);
    //       console.log("Search results page YouTube API request");
    //       console.log(response.data.items);
    //     } catch (error) {
    //       console.log(error.response.data);
    //     }
    //   };

    return (
        <div className="container">
 
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${formData}?autoplay=1m`}
          frameBorder="0"
        ></iframe>
  
        {/* Related Video 1
                  {likeVideoId[0].snippet.title} */}
  
        {search.map((searchEntered) => (
          <DisplaySearchResults
            key={searchEntered.id.videoId}
            searched={searchEntered}
          />
        ))}
      </div>
    );   
};

export default SearchResultsPage;