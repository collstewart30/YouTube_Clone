// be able to filter the table of music by album, artist, genre, release date, and title
// create a form with one input - this is where the user will type term they will search by
// once the form is submitted the value the user entered should be passed to a function on the app component that then filters the songs by 
// that term depending on if that term mathces any of the song's properties

import { useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import { KEY } from "../../localKey";
import axios from "axios";


const SearchBar = (props) => {
    
    const defaultValues = { search: "" };

    // const [search, setSearch] = useState('');
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
        defaultValues,
        onclick
      );

    function onclick() {
        console.log('search bar clicked');
        let newSearch = {formData};
        console.log(newSearch);
        // getSearchBarResults(formData)
    }


    const getSearchBarResults = async (searchTerm="philadelphia eagles") => {
        try {
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${formData}&type=video&key=${KEY}`, );
          console.log("YouTube related videos search API request ran")
          console.log(response.data.items)
        } catch (error) {
          console.log(error.response.data);
        }
      };
    
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Search Videos</label>
            <input 
                type='text' 
                // className='form-control' 
                name="search"
                value={formData.search}
                onChange={handleInputChange}/>
            <Link to="/search"></Link>
            <button 
                type='submit' 
                className='btn btn-primary' 
                style={{'marginTop':'1em'}}>
                    Enter
                </button>
        </form>
     );
}
 
export default SearchBar;