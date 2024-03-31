import React, { useState, useEffect } from 'react';
import Card from './Card'; // Assuming Card component is imported from a file
import axios from 'axios';
import getCookie from './getcookie';

function MovieList() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const userID = getCookie('userID')
        if (userID === "null" || userID === null) {
            window.location.href = '/login'; 
            return; 
        }

        axios.get("http://localhost:4000/movie/all")
            .then((res) => {
                setMovie(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">

                {movie.map((movie) => (
                    <Card key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        genre={movie.genre}
                        director={movie.director}
                        releaseYear = {movie.releaseYear}
                        averageRating={movie.averageRating.toFixed(1)}
                        totalNumberOfRating={movie.totalNumberOfRating} 
                    />
                ))}
            </div>
        </div>
    );
}

export default MovieList;
