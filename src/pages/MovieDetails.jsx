import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'utils/fetch-functions';
import BackLink from 'components/BackLink/BackLink';
import MovieMain from 'components/MovieMain/MovieMain';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieID } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movie = await fetchMovieDetails(movieID);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieID]);

  return (
    <>
      <BackLink to={backLinkHref}>&lt;- Go Back</BackLink>
      <MovieMain movieDetails={movieDetails}></MovieMain>
    </>
  );
};

export default MoviesDetails;
