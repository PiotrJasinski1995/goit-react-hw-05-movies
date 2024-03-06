import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'utils/fetch-functions';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';

const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movie = await fetchMovieCast(movieID);
        setCast(movie);
        setIsLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, [movieID]);

  return (
    <>
      {isLoading && <Loader />}
      {cast.length !== 0 && (
        <Section title="Movie Cast">
          <ul>
            {cast &&
              cast.map(actor => (
                <li key={actor.id}>
                  <img
                    width="200px"
                    height="300px"
                    src={
                      actor.profile_path &&
                      `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    }
                    alt={actor.original_name}
                  />
                  <p>{actor.name}</p>
                </li>
              ))}
          </ul>
        </Section>
      )}
      {cast && cast.length === 0 && <div>No cast info for this movie</div>}
    </>
  );
};

export default Cast;
