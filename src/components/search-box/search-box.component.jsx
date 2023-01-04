import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder }) => {
  return (
    <div className="search-container">
      <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
