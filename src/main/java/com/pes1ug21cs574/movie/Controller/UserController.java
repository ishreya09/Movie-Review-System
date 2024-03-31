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

import com.pes1ug21cs574.movie.Service.UserService;
import com.pes1ug21cs574.movie.Model.Authentication;
import com.pes1ug21cs574.movie.Model.User;

@RestController
@RequestMapping(path = "/user")
@CrossOrigin(origins = "*")     
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/add")
    public @ResponseBody Integer addNewUser(@RequestBody User user) {
        User u= userService.saveUser(user);
        return u.getId();
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "/get/{id}")
    public @ResponseBody User getUser(@PathVariable String id) {
        int i = Integer.parseInt(id);
        return userService.getUserById(i);
    }

    @PostMapping(path = "/authenticate")
    public @ResponseBody Integer authenticateUser(@RequestBody Authentication a) {
        User u= userService.authenticateUser(a.getEmail(), a.getPassword());
        System.out.println(u);
        if (u!=null){
            return u.getId();
        }
        return -1;
    }

    
}
