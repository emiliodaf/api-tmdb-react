import React from 'react';
import { API_IMG } from './api/api-key';


const MovieBox = ({title, poster_path, release_date, vote_average, overview}) =>{
    return(
        <div className='movie'>  
          <img src={API_IMG + poster_path } alt={title}/>
            <div className='movie-info'>     
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className='movie-overview'>
                <h5>Release Date: {release_date}</h5>
                <h6>Overview</h6>
                <p>{overview}</p>  
            </div>
          </div> 
        

    )
}
export default MovieBox;