package com.hicyilmam.food_tracker_api.controllers;

import com.hicyilmam.food_tracker_api.FoodTrackerApiApplicationTests;
import com.hicyilmam.food_tracker_api.models.User;
import com.hicyilmam.food_tracker_api.repositories.RecipeRepository;
import com.hicyilmam.food_tracker_api.repositories.UserRepository;
import java.math.BigDecimal;
import java.util.Arrays;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import static org.junit.jupiter.api.Assertions.assertEquals;

class UserControllerTest extends FoodTrackerApiApplicationTests {


    @Autowired
    private UserController userController;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RecipeRepository recipeRepository;

    @BeforeEach
    void setUp() {
        userRepository.removeAll();
        recipeRepository.removeAll();
    }

    @Test
    void addUser() {
        // given
        User user = new User();
        user.setAddress("User address");
        user.setDetails("User profile details");
        user.setEmail("test@test.com");
        user.setPassword("123456");
        user.setLatitude(new BigDecimal("123456"));
        user.setLongitude(new BigDecimal("123456"));
        user.setPhoneNumber("123");
        user.setThumb("http://user.image.com");
        user.setTags(Arrays.asList("Vegan", "Vegetarian"));

        // when
        userController.addUser(user);

        // then
        final var registeredUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        assertEquals(user, registeredUser);
    }

    @Test
    void getUsers() {
        User user1 = new User();
        User user2 = new User();

        userRepository.save(user1);
        userRepository.save(user2);

        final var users = userController.getUsers();

        assertEquals(2, users.size());
        assertEquals(user1, users.get(0));
        assertEquals(user2, users.get(1));
    }

    @Test
    void getUserByEmailAndPassword() {
        User user = new User();
        user.setEmail("test@test.com");
        user.setPassword("123456");

        userRepository.save(user);

        final var request = new LoginRequest();
        request.setEmail(user.getEmail());
        request.setPassword(user.getPassword());

        final var returnedUser = userController.getUserByEmailAndPassword(request);

        assertEquals(user, returnedUser);
    }
}