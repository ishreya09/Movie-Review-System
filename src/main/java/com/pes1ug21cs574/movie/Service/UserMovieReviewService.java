package com.pes1ug21cs574.movie.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pes1ug21cs574.movie.Repository.UserMovieReviewRepository;
import com.pes1ug21cs574.movie.Model.Movie;
import com.pes1ug21cs574.movie.Model.User;
import com.pes1ug21cs574.movie.Model.UserMovieReview;


@Service
public class UserMovieReviewService {
    @Autowired
    private UserMovieReviewRepository umrRepository;

    // save a review
    public UserMovieReview saveReview(Movie m, User u, String review){
        UserMovieReview user_review = new UserMovieReview();
        user_review.setUser(u);
        user_review.setMovie(m);
        user_review.setReview(review);
        return umrRepository.save(user_review);
    }

    // get reviews for a particular user 
    public List<UserMovieReview> getAllReviewByUser(User u) {
        return umrRepository.findByUser(u);
    }

    // get reviews for a particular movie
    public List<UserMovieReview> getAllReviewsByMovie(Movie m) {
        return umrRepository.findByMovie(m);
    }
    
}
