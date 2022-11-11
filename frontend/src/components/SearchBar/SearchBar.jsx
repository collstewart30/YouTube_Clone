import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";



const SearchBar = (props) => {
  const defaultValues = { search: "" };
  const navigate = useNavigate();

  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    handleClick
  );

  function handleClick() {
    console.log("search bar clicked");
    console.log(formData)
    props.searchBarParent(formData)
    navigate(`/search/${formData}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Search Videos</label>
      <input
        type="text"
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
