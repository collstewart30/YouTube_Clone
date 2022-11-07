
// just ONE video that was selected


// once the YouTube video is working correctly in the iframe component, work on getting RelatedVideos to display
// note that the same videoId you are using to grab the selected video will also be used to find related videos
// how can React Router Route be set up to pull this information from a URL param?



import React, { useState, useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";

{/* <li key={video.id.videoId}>
<li><img id="ytplayer" type="text/html" width="640" height="360" 
src={video.snippet.thumbnails.high.url}
frameborder="0"/>   
</li> */}


// {likeVideo &&
//     likeVideo.map((video) => (         
//         <li key={video.id.videoId}>
//             {/* {video.snippet.title} */}
//             {/* <li>{video.snippet.description}</li> */}
//         </li>
// ))}


const VideoPage = () => {
    
    const{videoId} = useParams();

    const[likeVideoId, setLikeVideoId] = useState([])
    console.log(videoId)

    useEffect(() => {
        const getRelatedVideos = async () => {        
            try {
                let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}`);
                console.log('VideoPage - results from thumbnail click')
                console.log(response.data.items)
                setLikeVideoId(response.data.items)
            } catch (error) {
                console.log(error)
            }
        };   
        getRelatedVideos();
    }, [videoId]);
    return (
        <div className="container">
            <div>
                <h1>{videoId}</h1>  
            </div>
            {likeVideoId &&
                likeVideoId.map((video) => (
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
        </div>
    );
};

export default VideoPage;

// <h1>{likeVideo.snippet.title}</h1>
                // <iframe 
                // id="ytplayer" type="text/html" width="640" height="360"
                // src=(`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`)
                // frameborder="0">
                // </iframe>