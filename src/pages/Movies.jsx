import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'utils/fetch-functions';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import Section from 'components/Section/Section';
import MainHeadingHidden from 'components/MainHeadingHidden/MainHeadingHidden';

const Movies = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';

  const updateQueryString = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    const search = async () => {
      if (movieName !== '') {
        try {
          const movies = await searchMovies(movieName);
          setSearchResults(movies);
        } catch (error) {
          console.error(error);
        }
      }
    };
    search();
  }, [movieName]);

  const handleFormSubmit = searchInput => {
    updateQueryString(searchInput);
  };

  return (
    <>
      <MainHeadingHidden>Movie Page</MainHeadingHidden>
      <Section title="Search movies">
        <SearchBar onSubmit={handleFormSubmit} />
      </Section>
      {searchResults?.length > 0 && (
        <MoviesList movies={searchResults}></MoviesList>
      )}
      {searchResults && searchResults?.length === 0 && (
        <div>No movie match given criteria</div>
      )}
    </>
  );
};

export default Movies;
