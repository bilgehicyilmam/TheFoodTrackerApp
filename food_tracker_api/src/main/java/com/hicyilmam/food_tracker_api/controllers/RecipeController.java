package com.hicyilmam.food_tracker_api.controllers;

import com.hicyilmam.food_tracker_api.models.Recipe;
import com.hicyilmam.food_tracker_api.repositories.RecipeService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    @Autowired
    public RecipeController(final RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @PostMapping
    public Recipe addRecipe(@RequestBody final Recipe recipe) {
        return recipeService.save(recipe);
    }

    @GetMapping
    public List<Recipe> getRecipes() {
        return recipeService.findAll();
    }
}
