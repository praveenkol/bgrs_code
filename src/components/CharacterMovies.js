import React from 'react';
import { connect } from 'react-redux';
import { Loader } from './Loader';
import { Card, Container, Row } from 'react-bootstrap';


const getLastMovieDetails = (movies) => {
if(movies.length > 0) {
  const dates = movies.map((movie) => {
    const dateArray = movie.release_date.split('-');
    return { date: parseInt(dateArray[0], 10), name: movie.title}
  });
  const max = dates.reduce(function(prev, current) {
    return (prev.date > current.date) ? prev : current
}) 

return <div className="last-movie">
         <div>Name/Year Last Movie : <strong>{max.name} - {max.date}</strong></div>
  </div>
}

return <div></div>;
};

const getMovies = (movies) => {
  return <Container>

    <div className="heading">
      <h4>{movies.length ? `Movies` : ''}</h4>
    </div>
    <Row md={3}>
  {movies.length > 0 && movies.map(movie => {
    const dateArray = movie.release_date.split('-');

    return <Card style={{margin:'20px' }} key={movie.title}>
    <Card.Body>
  <Card.Title>{movie.title} - {dateArray[0]}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">{movie.director}</Card.Subtitle>
      <Card.Text>
        {movie.opening_crawl}
      </Card.Text>
    </Card.Body>
  </Card>;
  })}
  </Row>
</Container>
}

const CharacterMovies = ({ movies, loader}) =>
  <div id='character-movies'>
   {getLastMovieDetails(movies)}
    {loader === false ? getMovies(movies) : <Loader/>} 
  </div>;

const mapStateToProps = ({ character: { movies: {movies, loader} } }) => ({
  movies,loader
});

export default connect(mapStateToProps)(CharacterMovies);
