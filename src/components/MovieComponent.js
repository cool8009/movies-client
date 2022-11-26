import React from 'react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MovieModalComponent from './MovieModalComponent';

const MovieComponent = ({movie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="wrapper" > 
    <Card className="flex-fill" style={{ width: '217px', height: '700px',
      alignments: 'center', marginLeft: '50px', marginTop: '50px', marginRight: '50px'}}>
    <Card.Img style={{ height: '324px', width: '216px'}} variant="top" src={movie.poster_path}  />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Subtitle> <FaStar/> {movie.vote_average} </Card.Subtitle>
      <Card.Text>
        {movie.overview.slice(0, 200)} ...
      </Card.Text>
      <Button style={{ position: 'absolute', bottom: '12px', right: '28%' }} 
      variant="primary"
      onClick={handleShow}
      >
        More Info
    </Button>
        <MovieModalComponent 
            show={show} 
            handleClose={handleClose}
            movie={movie} 
        />
    </Card.Body>
  </Card>
    </div>
  )
}

export default MovieComponent