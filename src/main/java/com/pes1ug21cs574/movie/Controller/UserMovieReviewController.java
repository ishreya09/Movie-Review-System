package com.pes1ug21cs574.movie.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pes1ug21cs574.movie.Model.Movie;
import com.pes1ug21cs574.movie.Model.User;
import com.pes1ug21cs574.movie.Model.UserMovieReview;

import com.pes1ug21cs574.movie.Service.MovieService;
import com.pes1ug21cs574.movie.Service.UserMovieReviewService;
import com.pes1ug21cs574.movie.Service.UserService;

@RestController
@RequestMapping("/review")
public class UserMovieReviewController {
    @Autowired
    private UserMovieReviewService userMovieReviewService;
    
    @Autowired
    private MovieService movieService;
    @Autowired
    private UserService userService;

    @GetMapping(path= "/add/{movieid}/{userid}/{review}")
    public @ResponseBody String addReview(@PathVariable String movieid, @PathVariable String userid, @PathVariable  String review) {
        // find Movie
        if (movieService.getMovieById(Long.parseLong(movieid))==null){
            return "Movie not found";
        }
        Movie m= movieService.getMovieById(Long.parseLong(movieid));
        // find User
        if (userService.getUserById(Integer.parseInt(userid))==null){
            return "User not found";
        }
        User u= userService.getUserById(Integer.parseInt(userid));
        userMovieReviewService.saveReview(m,u, review);
        return "Saved";
    }

    @GetMapping(path="/get/movie/{movieid}")
    public @ResponseBody Iterable<UserMovieReview>  getAllReviewsByMovie(@PathVariable("movieid") String id){
        long movieId = Long.parseLong(id);
        Movie m = movieService.getMovieById(movieId);
        return userMovieReviewService.getAllReviewsByMovie(m);
    }

    @GetMapping(path="/get/user/{userid}")
    public @ResponseBody Iterable<UserMovieReview>  getAllReviewsByUser(@PathVariable("userid") String id){
        int userId = Integer.parseInt(id);
        User u = userService.getUserById(userId);
        return userMovieReviewService.getAllReviewByUser(u);
    }


}
