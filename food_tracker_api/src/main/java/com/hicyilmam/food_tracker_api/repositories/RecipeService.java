package com.hicyilmam.food_tracker_api.repositories;

import com.hicyilmam.food_tracker_api.models.Recipe;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    @Autowired
    public RecipeService(final RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public Recipe save(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public List<Recipe> findAll() {
        return recipeRepository.findAll();
    }

    public Recipe findOne(final String id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public void removeAll() {
        recipeRepository.deleteAll();
    }

    public List<Recipe> getByUserId(final String id) {
        return recipeRepository.findByUserId(id);
    }
}
