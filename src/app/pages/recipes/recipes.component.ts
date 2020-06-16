import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe';
import { RecipeService } from '../../shared/services/recipe.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  filterByRecipeName: string;
  showRecipeCreateModal: boolean;
  recipeDetails: Recipe;


  constructor(public userService: UserService, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(res => {
      this.recipes = res;
      console.log(this.recipes);
    });
  }

  onSearched(filterName: string) {
    this.filterByRecipeName = filterName;
  }

  onRecipeSelected($event: Recipe) {
    this.recipeDetails = $event;
  }
}
