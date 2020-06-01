package com.hicyilmam.food_tracker_api.repositories;

import com.hicyilmam.food_tracker_api.models.Recipe;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class RecipeRepository {
    private List<Recipe> recipes = new ArrayList<>();

    public Recipe save(Recipe recipe) {
        if (recipe.getId() == null) {
            recipe.setId(recipes.size());
            recipes.add(recipe);
        } else {
            updateRecipe(recipe);
        }
        return recipe;
    }

    private void updateRecipe(final Recipe recipe) {
        for (int i = 0; i < recipes.size(); i++) {
            if (recipes.get(i).getId().equals(recipe.getId())) {
                recipes.set(i, recipe);
            }
        }
    }

    public List<Recipe> findAll() {
        return recipes;
    }
}
