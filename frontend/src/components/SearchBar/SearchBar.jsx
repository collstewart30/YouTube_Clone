import { useState } from "react";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    console.log(`new search: ${search}`);
    props.searchBarParent(search);
  }

  return (
    <form onSubmit={handleSearch}>
      <label>Search Videos</label>
      <input
        type="text"
        name="search"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: "1em" }}
      >
        Enter
      </button>
    </form>
  );
};

export default SearchBar;
