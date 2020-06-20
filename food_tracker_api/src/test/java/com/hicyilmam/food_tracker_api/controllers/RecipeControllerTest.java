package com.hicyilmam.food_tracker_api.controllers;

import com.hicyilmam.food_tracker_api.FoodTrackerApiApplicationTests;
import com.hicyilmam.food_tracker_api.models.Recipe;
import com.hicyilmam.food_tracker_api.repositories.RecipeService;
import java.util.Arrays;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import static org.junit.jupiter.api.Assertions.*;

class RecipeControllerTest extends FoodTrackerApiApplicationTests {

    @Autowired
    private RecipeController recipeController;

    @Autowired
    private RecipeService recipeService;

    @BeforeEach
    void setUp() {
        recipeService.removeAll();
    }

    @Test
    void addRecipe() {
        final var recipe = new Recipe();
        recipe.setCookTime(15);
        recipe.setPrepTime(15);
        recipe.setName("Test recipe");
        recipe.setDescription("Test recipe desc");
        recipe.setDirections("directions");
        recipe.setTags(Arrays.asList("Vegan", "Vegetarian"));
        final var createdBy = new Recipe.CreatedBy();
        createdBy.setId(0);
        createdBy.setName("Test user");
        createdBy.setThumb("test thumb");

        final var createdRecipe = recipeController.addRecipe(recipe);

        final var recipeFromDb = recipeService.findOne(createdRecipe.getId());

        assertEquals(createdRecipe, recipeFromDb);
        assertEquals(recipe, recipeFromDb);
    }

    @Test
    void getRecipes() {
        final var recipe1 = new Recipe();
        final var recipe2 = new Recipe();

        recipeService.save(recipe1);
        recipeService.save(recipe2);

        final var recipes = recipeController.getRecipes();

        assertEquals(2, recipes.size());
        assertEquals(recipe1, recipes.get(0));
        assertEquals(recipe2, recipes.get(1));
    }
}