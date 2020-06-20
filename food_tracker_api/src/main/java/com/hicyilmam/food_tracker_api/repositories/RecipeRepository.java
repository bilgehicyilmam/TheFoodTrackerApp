package com.hicyilmam.food_tracker_api.repositories;

import com.hicyilmam.food_tracker_api.models.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecipeRepository extends MongoRepository<Recipe, String> {
}
