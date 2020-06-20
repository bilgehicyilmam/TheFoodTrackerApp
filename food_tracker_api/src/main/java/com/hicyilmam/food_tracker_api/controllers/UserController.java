package com.hicyilmam.food_tracker_api.controllers;

import com.hicyilmam.food_tracker_api.models.User;
import com.hicyilmam.food_tracker_api.repositories.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(final UserService userService) {
        this.userService = userService;
    }


    @PostMapping
    public User addUser(@RequestBody final User user) {
        if (userService.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException();
        }
        return userService.save(user);
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.findAll();
    }

    @PostMapping("/login")
    public User getUserByEmailAndPassword(@RequestBody final LoginRequest loginRequest) {
        return userService.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
    }
}
