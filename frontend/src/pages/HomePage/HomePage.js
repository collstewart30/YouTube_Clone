import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [comments, setComments] = useState([]);
  console.log(user);
  console.log(token);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/comments/all/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setComments(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchComments();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Link to="/addcomment">Add Comment</Link>
      {comments &&
        comments.map((comment) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
