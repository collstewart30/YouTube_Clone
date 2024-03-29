import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AddComment = (props) => {
  const [user, token] = useAuth();

  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState();
  const [dislikes, setDislikes] = useState();

  let videoId = props.videoId;

  let tempNewComment = {
    user: user.id,
    video_id: videoId,
    text: newComment,
    likes: likes,
    dislikes: dislikes,
  };

  function handleSubmit(event) {
    event.preventDefault();
    postNewComment(tempNewComment);
  }
  
  async function postNewComment(tempNewComment) {
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/comments/add/`,
        tempNewComment,
        { headers: { Authorization: "Bearer " + token } }
        );
        console.log("New comment: ", response);
        props.getAllComments();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          style={{ margin: "1em" }}
        />
        <button
          className="button"
          type="submit"          
          style={{ margin: "1em" }}
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
