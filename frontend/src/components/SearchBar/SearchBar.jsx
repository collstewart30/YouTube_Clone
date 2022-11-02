// be able to filter the table of music by album, artist, genre, release date, and title
// create a form with one input - this is where the user will type term they will search by
// once the form is submitted the value the user entered should be passed to a function on the app component that then filters the songs by 
// that term depending on if that term mathces any of the song's properties

import { useState } from "react";


const SearchBar = (props) => {
    
    const [search, setSearch] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('search bar console log');
        props.searchBarParent(search);
        // value should be passed to a function on the app component that filters the songs by the term depending on if that term matches any of the song's properties
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <input type='text' className='form-control' onChange={(event) => setSearch(event.target.value)}/>
            <button type='submit' className='btn btn-primary' style={{'marginTop':'1em'}}>Search Video</button>
        </form>
     );
}
 
export default SearchBar;