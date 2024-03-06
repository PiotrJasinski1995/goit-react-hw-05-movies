import propTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const searchText = event.target.elements.search.value;

    if (!searchText) return;

    onSubmit(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  handleSubmit: propTypes.func,
};
