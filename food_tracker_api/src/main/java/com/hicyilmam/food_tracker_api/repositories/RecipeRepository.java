package com.hicyilmam.food_tracker_api.repositories;

import com.hicyilmam.food_tracker_api.models.Recipe;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface RecipeRepository extends MongoRepository<Recipe, String> {


    @Query("{ 'userId' : ?0 }")
    List<Recipe> findByUserId(String id);
}
