package com.hicyilmam.food_tracker_api.repositories;

import com.hicyilmam.food_tracker_api.models.Recipe;
import com.hicyilmam.food_tracker_api.models.User;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRepository {
    private List<User> users = new ArrayList<>();

    @Autowired
    private RecipeRepository recipeRepository;

    public User save(User user) {
        if (user.getId() == null) {
            user.setId(users.size());
            users.add(user);
        } else {
            updateUser(user);
        }
        return user;
    }

    public List<User> findAll() {
        final List<Recipe> recipes = recipeRepository.findAll();
        for (User user : users) {
            Set<String> userTags = new HashSet<>();
            List<Recipe> userRecipes = recipes.stream().filter(r -> r.getCreatedBy().getId().equals(user.getId())).collect(Collectors.toList());
            userRecipes.forEach(r -> userTags.addAll(r.getTags()));
            user.setTags(new ArrayList<>(userTags));
        }
        return users;
    }

    public User findByEmailAndPassword(final String email, final String password) {
        for (final User user : users) {
            if (email.equals(user.getEmail()) && password.equals(user.getPassword())) {
                return user;
            }
        }
        return null;
    }

    private void updateUser(final User user) {
        for (int i = 0; i < users.size(); i++) {
            if (users.get(i).getId().equals(user.getId())) {
                users.set(i, user);
            }
        }
    }

    public boolean existsByEmail(final String email) {
        for (final User user : users) {
            if (email.equals(user.getEmail())) {
                return true;
            }
        }
        return false;
    }
}
