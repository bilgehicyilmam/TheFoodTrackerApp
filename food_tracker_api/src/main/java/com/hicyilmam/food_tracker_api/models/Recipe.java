package com.hicyilmam.food_tracker_api.models;

import java.util.List;
import java.util.Map;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Recipe {
    @Id
    private String id;
    private String name;
    private String description;
    private Integer prepTime;
    private Integer cookTime;
    private String directions;
    private String thumbUrl;
    private CreatedBy createdBy;
    private Map<String, Nutrient> nutrients;
    private List<String> tags;
    private List<Ingredient> ingredients;
    private Integer portionSize;
    private String userId;

    @Data
    public static class CreatedBy {
        private String name;
        private String thumb;
    }

    @Data
    static class Nutrient {
        private Integer amount;
    }
}
