// just ONE video that was selected

// once the YouTube video is working correctly in the iframe component, work on getting RelatedVideos to display
// note that the same videoId you are using to grab the selected video will also be used to find related videos
// how can React Router Route be set up to pull this information from a URL param?

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import DisplayRelatedVideos from "../../components/DisplayRelatedVideos/DisplayRelatedVideos";

const VideoPage = () => {
  const { videoId } = useParams();

  const [likeVideoId, setLikeVideoId] = useState([]);
  // console.log(videoId)

  useEffect(() => {
    getRelatedVideos();
  }, [videoId]);

  const getRelatedVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&key=${KEY}&part=snippet&type=video&maxResults=5`
      );
      console.log("VideoPage - results from thumbnail click");
      console.log(response.data.items);
      setLikeVideoId(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {/* <h1>{videoId.snippet.title}</h1> */}

      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1m`}
        frameBorder="0"
      ></iframe>

      {/* Related Video 1
                {likeVideoId[0].snippet.title} */}

      {likeVideoId.map((singleVideo) => (
        <DisplayRelatedVideos
          key={singleVideo.id.videoId}
          video={singleVideo}
        />
      ))}
    </div>
  );
};

export default VideoPage;
