import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';

//Modal component which shows extra info when clicking on a movie card
const MovieModalComponent = ({ show, handleClose, movie  }) => {
  return (
    <>
     <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
            style={{ display: 'grid', 

            //gridTemplateRows: '2fr 1fr',
            gridTemplateColumns: '1fr 2fr' }}
        >        
                <div>
                    <img style={{ height: '324px', width: '216px'}} variant="top" alt="movieimage" src={movie.poster_path}/> 
                </div>
                <div style={{marginLeft: '30px'}}> 
                    <p> {movie.overview} </p>
                    <p><b>Genre: {movie.genreNames !== null ? movie.genreNames[0] : 'Unknown'}</b>  </p>
                    <p><b>Release Date: {movie.release_date !== null ? movie.release_date : 'Unknown'}</b>  </p>
                    <div>
                        <p> <FaStar/> {movie.vote_average} by {movie.vote_count} users. </p>
                        <p> Current popularity rating: { movie.popularity }</p>
                    </div>
                </div>          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MovieModalComponent