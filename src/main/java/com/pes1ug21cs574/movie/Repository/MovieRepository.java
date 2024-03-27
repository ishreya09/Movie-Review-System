package com.pes1ug21cs574.movie.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pes1ug21cs574.movie.Model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
