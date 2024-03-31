package com.pes1ug21cs574.movie.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pes1ug21cs574.movie.Model.Movie;
import com.pes1ug21cs574.movie.Service.MovieService;

@RestController
@RequestMapping(path = "/movie")
@CrossOrigin(origins = "*") 
public class MovieController {
    @Autowired
    private MovieService movieService;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewMovie(@RequestBody Movie movie) {
        movieService.saveMovie(movie);
        return "Saved";
    }


    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping(path = "/updateRating/{id}/{rating}")
    public @ResponseBody String updateRating(@PathVariable double rating, @PathVariable String id) {
        Long i = Long.parseLong(id);
        movieService.updateMovieRating(i,rating);
        return "Updated";
    }

    @GetMapping(path = "/delete/{id}")
    public @ResponseBody String deleteMovie(@PathVariable String id) {
        Long i = Long.parseLong(id);
        movieService.deleteMovie(i);
        return "Deleted";
    }

    @GetMapping(path = "/get/{id}")
    public @ResponseBody Movie getMovie(@PathVariable String id) {
        Long i = Long.parseLong(id);
        return movieService.getMovieById(i);
    }

}
