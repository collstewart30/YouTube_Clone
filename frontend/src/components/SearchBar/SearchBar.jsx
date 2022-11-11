// be able to filter the table of music by album, artist, genre, release date, and title
// create a form with one input - this is where the user will type term they will search by
// once the form is submitted the value the user entered should be passed to a function on the app component that then filters the songs by
// that term depending on if that term mathces any of the song's properties

import { useEffect, useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import { Link, useNavigate } from "react-router-dom";
import { KEY } from "../../localKey";
import axios from "axios";

// default values = searchTerm?

const SearchBar = (props) => {
  const defaultValues = { search: "" };
  const navigate = useNavigate();

  // const [search, setSearch] = useState('');

  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    handleClick
  );

  function handleClick(formData) {
    console.log("search bar clicked");
    console.log(formData)
    // props.searchBarParent(formData)
    navigate(`/search/${formData}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Search Videos</label>
      <input
        type="text"
        // className='form-control'
        name="search"
        value={formData.search}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: "1em" }}
        onClick={() => handleClick(formData)}
      >
        Enter
      </button>
    </form>
  );
};

export default SearchBar;
