import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe';
import { map } from 'rxjs/operators';
import { Food } from '../models/food';
import { cloneDeep } from 'lodash';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [];

  constructor(private http: HttpClient) {
  }

  public getReservations(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('assets/data/recipes.json').pipe(map(recipes => {
      this.recipes = recipes;
      return recipes;
    }));
  }

  public findIngredients(query: string): Observable<Food[]> {
    return this.http.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=viXnz4QNJ7izL9DaLjZ3Trze26mu4OFagnX6Qq9d&query=${query}`)
      .pipe(map((res: any) => {
        return res.foods;
      }));
  }

  createRecipe(recipe: any): Observable<any> {
    const recipeCopy = cloneDeep(recipe);
    console.log(JSON.stringify(recipeCopy));
    this.modifyRecipeForCreation(recipeCopy);
    this.recipes.push(recipeCopy);
    return of(recipeCopy);
  }

  getIngredientDetails(ingredientId): Observable<[{
    portionDescription: string;
    gramWeight: number;
  }]> {
    return this.http.get(`https://api.nal.usda.gov/fdc/v1/food/${ingredientId}?api_key=viXnz4QNJ7izL9DaLjZ3Trze26mu4OFagnX6Qq9d`)
      .pipe(map((res: any) => {
        const foodPortions = res.foodPortions || [];
        if (res.servingSizeUnit && res.servingSize && res.householdServingFullText) {
          const gramWeight = res.servingSizeUnit === 'g' ? res.servingSize : res.servingSize / 1000;
          foodPortions.push({
            gramWeight,
            portionDescription: res.householdServingFullText
          });
        }
        return foodPortions;
      }));
  }

  private modifyRecipeForCreation(recipeCopy: Recipe) {
    recipeCopy.id = this.recipes.length;
  }
}
