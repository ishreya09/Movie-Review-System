package com.pes1ug21cs574.movie.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pes1ug21cs574.movie.Model.Movie;
import com.pes1ug21cs574.movie.Model.User;
import com.pes1ug21cs574.movie.Model.UserMovieReview;

@Repository
public interface UserMovieReviewRepository extends JpaRepository<UserMovieReview, Long> {
    // custom method to get all reviews for a specific movie
    List<UserMovieReview> findByMovie(Movie m);
    // custom method to get all reviews for a specific user
    List<UserMovieReview> findByUser(User u);
    

}
