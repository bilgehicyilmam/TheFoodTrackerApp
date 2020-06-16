import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe';
import { flatMap, map } from 'rxjs/operators';
import { Food } from '../models/food';
import { cloneDeep } from 'lodash';
import { UserService } from './user.service';
import { ProviderService } from './provider.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [];

  // private api = 'http://ec2-3-134-80-99.us-east-2.compute.amazonaws.com:8080/recipes';
  private api = 'http://localhost:8080/recipes';

  constructor(private http: HttpClient, private userService: UserService, private providerService: ProviderService) {
  }

  public getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.api).pipe(map(recipes => {
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
    return this.modifyRecipeForCreation(recipeCopy).pipe(flatMap(res => {
      return this.http.post<Recipe>(this.api, recipeCopy).pipe(map(recipeResponse => {
        this.recipes.push(recipeResponse);
      }));
    }));
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
    return this.userService.getAuthenticatedUser().pipe(map(res => {

      const { id, name, thumb } = res;
      recipeCopy.createdBy = {
        id,
        name,
        thumb
      };
      console.log(recipeCopy);
    }));
  }
}
