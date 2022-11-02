// work on getting your results from the YouTube Data API to appear on your SearchResultsPage
// once SearchResults are working, create an onClick event function handler to allow clicking a video to navigate to the VideoPage
// where the embedded player will show the YouTube video selected

import React from 'react';


const SearchResultsPage = (props) => {
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>
                        Video
                    </th>
                </tr>
            </thead>
            {props.mapVideos}
        </table>
    )

}
export default SearchResultsPage;