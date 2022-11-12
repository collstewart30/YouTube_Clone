import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AddCommentPage = (props) => {
  const [user, token] = useAuth();

  const [newComment, setNewComment] = useState('');

  let tempNewComment = {
    comment: newComment,
  };

  function handleSubmit(event) {
    event.preventDefault();
    postNewComment(tempNewComment);
    props.getAllComments();
  }

  async function postNewComment() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/comments/", 
        tempNewComment,
        {headers: {Authorization: "Bearer " + token,},}
        );
        console.log("New comment: ", response)
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
            value={newComment} 
            onChange={(event) => setNewComment(event.target.value)}
          />
        </label>
        <button type='submit'>Add Comment</button>
      </form>
    </div>
  );
};

export default AddCommentPage;
