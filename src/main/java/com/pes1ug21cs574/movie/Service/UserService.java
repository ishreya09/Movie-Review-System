package com.pes1ug21cs574.movie.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pes1ug21cs574.movie.Repository.UserRepository;
import com.pes1ug21cs574.movie.Model.User;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    // save a user
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // get all user
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // authenticate user by email
    public User authenticateUser(String email, String password) { // login
        User u= userRepository.findByEmail(email);
        if (u!=null && u.getPassword().equals(password)) {
            return u;
        }
        return null;
    }
    
    // get a user by id
    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }
    
}
