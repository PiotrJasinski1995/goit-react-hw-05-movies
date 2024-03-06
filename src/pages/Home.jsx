import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'utils/fetch-functions';
import MoviesList from 'components/MoviesList/MoviesList';
import Section from 'components/Section/Section';
import MainHeadingHidden from 'components/MainHeadingHidden/MainHeadingHidden';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetchTrendingMovies();
      setTrending(movies);
    };
    fetchData();
  }, []);

  return (
    <>
      <MainHeadingHidden>Home Page</MainHeadingHidden>
      <Section title="Trending Movies">
        <MoviesList movies={trending}></MoviesList>
      </Section>
    </>
  );
};

export default Home;
