import React, { useEffect, useState } from 'react'
import { API_SEARCH, API_URL } from './api/api-key';
import './App.css';
import MovieBox from './MovieBox';
import './movie.jpg'

function App() {

const [movies, setMovies] = useState([])
const [searchTerm, setSearchTerm] = useState('')



useEffect(() => {
      fetch(API_URL)
      .then(resp => resp.json())
      .then(data =>{
          setMovies(data.results);
      })

},[])

const handleOnSubmit = (e) => {
      
     e.preventDefault()

     if (searchTerm) {

     fetch(API_SEARCH + searchTerm)
     .then(resp => resp.json())
     .then(data =>{
          setMovies(data.results)
     })


          setSearchTerm('');
     }

}

const handleOnChange = (e) => {

     setSearchTerm(e.target.value)
}


  return (

<>
<header>
    
     <form onSubmit={handleOnSubmit}>
          <input type='search' placeholder='search...'
                  value={searchTerm}
                  onChange={handleOnChange}>
          </input>
     </form>
</header>

    <div className='movie-container'>
       {movies.map((movie) =>(
          <MovieBox key={movie.id} {...movie} />

       ))}
    </div>

    <footer id='footer'>
    <div className='social-container'>
      <ul>
         <li>
    <a href='http://www.facebook.com'><i class='fab fa-facebook-square'></i>facebook</a>
         </li>
         <li>
    <a href='http://www.instagram.com'><i class='fab fa-instagram-square'></i>instagram</a>
         </li>
         <li>
    <a href='http://www.youtube.com'><i class='fab fa-youtube-square'></i>youtube</a>
         </li>    
      </ul>  
    </div>
  
    <div className="country">
        <span>Rio de Janeiro - Brasil</span>
        <p>&copy;2022 React Movies App</p>
    </div>

  </footer>
  

    </>

  )
}

export default App