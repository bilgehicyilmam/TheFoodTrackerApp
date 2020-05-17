import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';
import { map } from 'rxjs/operators';
import { Food } from '../models/food';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  public getReservations(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('assets/data/recipes.json');
  }

  public findIngredients(query: string): Observable<Food[]> {
    return this.http.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=viXnz4QNJ7izL9DaLjZ3Trze26mu4OFagnX6Qq9d&query=${query}`)
      .pipe(map((res: any) => {
        return res.foods;
      }));
  }

  createRecipe(recipe: any) {
    return undefined;
  }
}
