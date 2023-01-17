// just ONE video that was selected

// once the YouTube video is working correctly in the iframe component, work on getting RelatedVideos to display
// note that the same videoId you are using to grab the selected video will also be used to find related videos
// how can React Router Route be set up to pull this information from a URL param?

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { KEY } from "../../localKey";
import DisplayRelatedVideos from "../../components/DisplayRelatedVideos/DisplayRelatedVideos";
import DisplayComments from "../../components/DisplayComments/DisplayComments";
import AddComment from "../../components/AddComment/AddComment";
// import "../../App.css"
import "./VideoPage.css";

const VideoPage = () => {
  const { videoId } = useParams();

  const [likeVideoId, setLikeVideoId] = useState([]);
  // console.log(videoId)

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getRelatedVideos();
    getAllComments();
  }, []);

  const getRelatedVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&key=${KEY}&part=snippet&type=video&maxResults=5`
      );
      console.log("VideoPage data",response.data.items);
      setLikeVideoId(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  async function getAllComments() {
    const responseGet = await axios.get(
      `http://127.0.0.1:8000/api/comments/all/${videoId}/`
    );
    console.log(responseGet.data);
    setComments(responseGet.data);
  }

  return (
    <div className="container">
      <div>
        <div>
          <iframe
            id="ytplayer"
            type="text/html"
            width="500"
            height="250"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1m`}
            frameBorder="0"
          ></iframe>
        </div>
        {/* Related Video 1
                {likeVideoId[0].snippet.title} */}
        <div className="container">
          {/* <h4 className="text-muted" style={{ margin: "1em" }}>
            COMMENTS
          </h4> */}
          <div>
            <AddComment
              // addNewCommentParent={setComments}
              videoId={videoId}
              getAllComments={getAllComments}
            />
            <DisplayComments parentDisplayComments={comments}/>
          </div>
        </div>
      </div>
      <div className="container">
        {likeVideoId.map((singleVideo) => (
          <div key={singleVideo.id.videoId} className="video-container">
            <DisplayRelatedVideos video={singleVideo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
