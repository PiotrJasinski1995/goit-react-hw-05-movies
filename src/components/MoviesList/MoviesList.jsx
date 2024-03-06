import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import { LinkStyled } from './styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <LinkStyled to={`/movies/${movie.id}`} state={{ from: location }}>
                {(movie.title && movie.title) || (movie.name && movie.name)}
              </LinkStyled>
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: propTypes.array,
};
