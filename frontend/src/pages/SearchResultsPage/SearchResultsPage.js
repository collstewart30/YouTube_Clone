// work on getting your results from the YouTube Data API to appear on your SearchResultsPage
// once SearchResults are working, create an onClick event function handler to allow clicking a video to navigate to the VideoPage
// where the embedded player will show the YouTube video selected

import React from 'react';
import { useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import { Link, useNavigate, userParams } from "react-router-dom";
import { KEY } from "../../localKey";
import axios from "axios";

const SearchResultsPage = (props) => {

    
    // const getSearchBarResults = async (searchTerm="philadelphia eagles") => {
    //     try {
    //       let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${formData}&type=video&key=${KEY}`, );
    //       console.log("YouTube related videos search API request ran")
    //       console.log(response.data.items)
    //     } catch (error) {
    //       console.log(error.response.data);
    //     }
    //   };

    return(
        <div>Video Results</div>
    );

}
export default SearchResultsPage;