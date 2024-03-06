import { Outlet } from 'react-router-dom';
import propTypes from 'prop-types';
import {
  MovieLayoutStyled,
  PosterStyled,
  MovieInfoStyled,
  LinkStyled,
} from './styled';

import Section from 'components/Section/Section';
import SmallSection from 'components/SmallSection/SmallSection';

const MovieMain = ({ movieDetails }) => {
  return (
    <Section>
      <MovieLayoutStyled>
        <PosterStyled
          src={
            movieDetails.poster_path &&
            `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
          }
          alt={movieDetails.title}
        />
        <MovieInfoStyled>
          <h1>{movieDetails.title && movieDetails.title}</h1>
          <SmallSection title="Overview">
            <p>{movieDetails.overview && movieDetails.overview}</p>
          </SmallSection>
          <SmallSection title="Genres">
            <p>
              {movieDetails.genres &&
                movieDetails.genres.map(genre => genre.name).join(', ')}
            </p>
          </SmallSection>
        </MovieInfoStyled>
      </MovieLayoutStyled>
      <SmallSection title="Additional information">
        <ul>
          <li>
            <LinkStyled to="cast">Cast</LinkStyled>
          </li>
          <li>
            <LinkStyled to="reviews">Reviews</LinkStyled>
          </li>
        </ul>
      </SmallSection>
      <Outlet />
    </Section>
  );
};

export default MovieMain;

MovieMain.propTypes = {
  movieDetails: propTypes.object,
};
