package com.pes1ug21cs574.movie.Repository;

import org.springframework.stereotype.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pes1ug21cs574.movie.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

    User findByEmail(String email);

    Optional<User> findById(Long id);
    
}
