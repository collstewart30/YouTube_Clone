// work on getting your results from the YouTube Data API to appear on your SearchResultsPage

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