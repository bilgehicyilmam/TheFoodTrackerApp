import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];

  filterByRecipeName: string;

  showModal: boolean;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.getReservations().subscribe(res => {
      this.recipes = res;
    });
  }

  onSearched(filterName: string) {
    this.filterByRecipeName = filterName;
  }
}
