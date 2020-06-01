package com.hicyilmam.food_tracker_api.controllers;

import com.hicyilmam.food_tracker_api.models.User;
import com.hicyilmam.food_tracker_api.repositories.UserRepository;
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
    private final UserRepository userRepository;

    @Autowired
    public UserController(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @PostMapping
    public User addUser(@RequestBody final User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException();
        }
        return userRepository.save(user);
    }

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public User getUserByEmailAndPassword(@RequestBody final LoginRequest loginRequest) {
        return userRepository.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
    }
}
