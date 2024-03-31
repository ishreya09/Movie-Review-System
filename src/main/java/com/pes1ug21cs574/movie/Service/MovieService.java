package com.pes1ug21cs574.movie.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pes1ug21cs574.movie.Model.Movie;
import com.pes1ug21cs574.movie.Repository.MovieRepository;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    
    // save a movie
    public Movie saveMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    // get all movies
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    // get a movie by id
    public Movie getMovieById(Long id) {
        return movieRepository.findById(id).orElse(null);
    }

    // delete a movie
    public void deleteMovie(Long id) {
        movieRepository.deleteById(id);
    }

    // update rating of a movie
    public Movie updateMovieRating(Long id, double rating) {
        Movie existingMovie = movieRepository.findById(id).orElse(null);
        existingMovie.setAverageRating(rating);
        return movieRepository.save(existingMovie);
    }
}
