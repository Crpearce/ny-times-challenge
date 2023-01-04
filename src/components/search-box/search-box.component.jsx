import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder }) => {
  return (
    <div className="search-container">
      <input
        border= '2px solid red'
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;