import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Search bar component
const SearchComponent = ({ sendSearch }) => {

    const onSearchSubmit = (e) => {
        e.preventDefault()
        let { searchtext } = e.target.elements;
        if (searchtext.value === '') {
          alert('Please insert search query')
          return
        }
        searchtext = searchtext.value
        sendSearch(searchtext)
    
      }

  return (
    <div>
        <Form 
            onSubmit={onSearchSubmit} 
            style={{ width: '30%' }}
            className="d-flex"
        >
            <Form.Control
              type="search"
              placeholder="Search Movies"
              className="me-2"
              aria-label="Search"
              id='searchtext'
            />
            <Button 
                variant="outline-success" 
                type="submit"
                >
                    Search
            </Button>
          </Form>
    </div>
  )
}

export default SearchComponent