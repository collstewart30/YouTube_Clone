import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

const AddCommentPage = (props) => {
  const [user, token] = useAuth();

  const [comment, setComment] = useState();

    let newComment = { comment: comment };

    function handleSubmit(event){
        event.preventDefault();
        postNewComment()
    }

  async function postNewComment() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/comments/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      {/* <h2>{user.username}</h2> */}
      <form className="form" onSubmit={handleSubmit}>
        <label>
          text:{" "}
          <input
            type="text"
            name="text"
            value={formData.video_id}
            onChange={handleInputChange}
          />
        </label>
        <button>Add Comment</button>
      </form>
      {/* <iframe id="ytplayer" type="text/html" width="640" height="360"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                frameborder="0"></iframe> */}
    </div>
  );
};

export default AddCommentPage;
