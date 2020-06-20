package com.hicyilmam.food_tracker_api.repositories;

import com.hicyilmam.food_tracker_api.models.Recipe;
import com.hicyilmam.food_tracker_api.models.User;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    private final UserRepository userRepository;
    private final RecipeService recipeService;

    public UserService(final UserRepository userRepository, final RecipeService recipeService) {
        this.userRepository = userRepository;
        this.recipeService = recipeService;
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public List<User> findAll() {
        final var recipes = recipeService.findAll();
        final var users = userRepository.findAll();
        for (User user : users) {
            Set<String> userTags = new HashSet<>();
            List<Recipe> userRecipes = recipes.stream().filter(r -> r.getCreatedBy().getId().equals(user.getId())).collect(Collectors.toList());
            userRecipes.forEach(r -> userTags.addAll(r.getTags()));
            user.setTags(new ArrayList<>(userTags));
        }
        return users;
    }

    public User findByEmailAndPassword(final String email, final String password) {
        return userRepository.findByEmailAndPassword(email, password).orElse(null);
    }


    public boolean existsByEmail(final String email) {
        return userRepository.existsByEmail(email);
    }

    public void removeAll() {
        userRepository.deleteAll();
    }
}
