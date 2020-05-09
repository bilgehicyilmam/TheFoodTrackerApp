import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  public getReservations(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('assets/data/recipes.json');
  }
}
