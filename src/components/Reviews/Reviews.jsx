import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'utils/fetch-functions';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';

const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movie = await fetchMovieReviews(movieID);
        setReviews(movie);
        setIsLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, [movieID]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews && (
        <Section title="Reviews">
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}
      {reviews && reviews.length === 0 && <div>No reviews for this movie</div>}
    </>
  );
};
export default Reviews;
