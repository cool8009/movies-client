import React from 'react'
import Button from 'react-bootstrap/Button';

const Pagination = ({ moviesPerPage, setMoviesPerPage, totalMovies, paginate}) => {
    const pageNumbers = [];
    //fill page numbers dynamically based on amount of content presented
    for (let i = 1; i < Math.ceil(totalMovies / moviesPerPage) + 1; i++) {
        pageNumbers.push(i); 
    }
    return (
      <nav className="d-flex" style={{ marginTop: '30px' }}>
        <ul className="pagination mx-auto text-center"> 
                <li style={{ marginRight: '20px'}}>
                    <p>
                        Set Page:
                    </p>
                </li>
            {pageNumbers.map(num => (
                <li key={num} className="page-item">
                    <Button onClick={() => paginate(num)} className="page-link">
                        {num}
                    </Button>
                </li>
            ))}
        </ul>
        <ul className="pagination mx-auto text-center"> 
                <li style={{ marginRight: '20px'}}>
                    <p>
                        Set Movies Per Page:
                    </p>
                </li>
                { totalMovies >= 5 && 
                    (<li className="page-item">
                        <Button onClick={() => setMoviesPerPage(5)} className="page-link">
                            5
                        </Button>
                    </li>)
                }
                { totalMovies >= 10 && 
                    (<li className="page-item">
                        <Button onClick={() => setMoviesPerPage(10)} className="page-link">
                            10
                        </Button>
                    </li>)
                }
                { totalMovies >= 20 && 
                    (<li className="page-item">
                        <Button onClick={() => setMoviesPerPage(20)} className="page-link">
                            20
                        </Button>
                    </li>)
                }
            
        </ul>
      </nav>
    )
}

export default Pagination