// be able to filter the table of music by album, artist, genre, release date, and title
// create a form with one input - this is where the user will type term they will search by
// once the form is submitted the value the user entered should be passed to a function on the app component that then filters the songs by 
// that term depending on if that term mathces any of the song's properties

import { useEffect, useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import { Link, useNavigate } from "react-router-dom";
import { KEY } from "../../localKey";
import axios from "axios";


const SearchBar = () => {
    
    const defaultValues = { search: "" };
    const navigate = useNavigate();

    // const [search, setSearch] = useState('');
    
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
      defaultValues,
      onClick,
    );

    function onClick() {
      console.log('search bar clicked');
      let newSearch = {formData};
      console.log(newSearch);
      // getSearchBarResults(formData)
  }


    
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Search Videos</label>
            <input 
                type='text' 
                // className='form-control' 
                name="search"
                value={formData.search}
                onChange={handleInputChange}/>
            <button 
                type='submit' 
                className='btn btn-primary' 
                style={{'marginTop':'1em'}}
                onClick={() => navigate("/search")}>
                    Enter
            </button>
        </form>
     );
}
 
export default SearchBar;