/* tslint:disable:object-literal-key-quotes */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, flatMap, map } from 'rxjs/operators';
import { RecipeService } from '../../../../shared/services/recipe.service';
import { Food } from '../../../../shared/models/food';
import { UploadService } from '../../../../shared/services/upload.service';
import { Recipe } from '../../../../shared/models/recipe';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-create-recipe-modal',
  templateUrl: './create-recipe-modal.component.html',
  styleUrls: ['./create-recipe-modal.component.scss']
})
export class CreateRecipeModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() closed = new EventEmitter<Recipe>();

  public recipe: Recipe = {
    portionSize: null,
    name: '',
    description: '',
    prepTime: null,
    cookTime: null,
    directions: '',
    createdBy: null,
    nutrients: {},
    ingredients: [],
    tags: []
  };
  public ingredientModel;
  public ingredientValue;
  public ingredients: Food[] = [];

  public showNutrientDetails: boolean;

  public objectKeys = Object.keys;

  private recipePicture;

  constructor(private recipeService: RecipeService, private uploadService: UploadService) {
  }

  ngOnInit(): void {
  }

  public ingredientFormatter = (f) => f.description;

  public ingredientSearch(text$: Observable<string>) {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      flatMap(term => {
        return term.length < 2 ? of([]) : this.recipeService.findIngredients(term);
      }));
  }


  public onIngredientModelChange(selected) {
    const { item } = selected;
    item.times = 1;
    item.amount = 100;
    this.ingredients.push(item);
    this.ingredientValue = '';
    this.calculateNutrientsForRecipe();
    this.recipeService.getIngredientDetails(item.fdcId).subscribe(res => {
      item.foodPortions = res;
    });
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.calculateNutrientsForRecipe();
  }

  increaseIngredient(i: number) {
    this.ingredients[i].times++;
    this.calculateNutrientsForRecipe();
  }

  calculateNutrientsForRecipe() {
    const nutrients: any = {};
    for (let i = 0; i < this.ingredients.length; i++) {
      const ingredient = this.ingredients[i];
      const { foodNutrients } = ingredient;
      for (let j = 0; j < foodNutrients.length; j++) {
        const nutrient = foodNutrients[j];
        nutrients[nutrient.nutrientName] = nutrients[nutrient.nutrientName] || { amount: 0 };
        nutrients[nutrient.nutrientName].amount += ingredient.times * (ingredient.amount) * (nutrient.value / 100);
      }

    }
    this.recipe.nutrients = nutrients;

  }

  onIngredientAmountChange(i: number, value: any) {
    this.ingredients[i].amount = value;
    this.calculateNutrientsForRecipe();
  }

  selectRecipePicture($event: any) {
    this.recipePicture = $event.target.files[0];
  }

  formSubmitted() {
    if (this.ingredients) {
      this.recipe.ingredients = this.mapIngredients();
    }

    this.recipe.tags = this.calculateTags(this.ingredients);

    if (!this.recipePicture) {
      this.recipeService.createRecipe(this.recipe).subscribe(res => {
        this.resetFormAndClose(res);
      });
    } else {
      this.uploadService.uploadFile(this.recipePicture).pipe(flatMap(res => {
        this.recipe.thumbUrl = res.Location;
        return this.recipeService.createRecipe(this.recipe);
      })).subscribe(res => {
        this.resetFormAndClose(res);
      });
    }
  }

  mapIngredients() {
    return this.ingredients.map(ingredient => {
      const amount = ingredient.amount;
      ingredient.foodPortions.forEach(portion => {
        const gramWeight = portion.gramWeight;
        if (gramWeight === parseFloat(String(amount))) {
          ingredient.portionText = portion.portionDescription + ' (' + portion.gramWeight + 'g)';
          ingredient.portionText = ingredient.times > 1 ? ingredient.times + ' * (' + ingredient.portionText + ')' : ingredient.portionText;
        }
      });
      return {
        name: ingredient.description,
        portion: ingredient.portionText
      };
    });
  }

  private resetFormAndClose(recipe: Recipe): void {
    this.closed.emit(recipe);
    this.recipe = {
      portionSize: null,
      name: '',
      description: '',
      prepTime: null,
      cookTime: null,
      directions: '',
      createdBy: null,
      nutrients: {},
      ingredients: [],

    };
    this.ingredientModel = null;
    this.ingredientValue = null;
    this.ingredients = null;
  }


  private calculateTags(ingredients: any) {
    const tags = [];
    const vegan = ['beef', 'pork', 'lamb', 'meat', 'chicken', 'duck', 'poultry', 'fish', 'crab', 'clam', 'mussel', 'cheese', 'milk', 'butter', 'fat', 'mayonnaise', 'ice cream', 'dairy', 'honey', 'egg'];
    const vegetarian = ['beef', 'pork', 'lamb', 'meat', 'chicken', 'duck', 'poultry', 'fish', 'crab', 'clam', 'mussel'];
    const sugar = ['sweet', 'sugar', 'syrup'];
    const glutenFree = ['wheat', 'flour'];
    if (this.ingredientsContain(ingredients, vegan)) {
      tags.push('Vegan');
    }
    if (this.ingredientsContain(ingredients, vegetarian)) {
      tags.push('Vegetarian');
    }
    if (this.ingredientsContain(ingredients, sugar)) {
      tags.push('Sugar Free');
    }
    if (this.ingredientsContain(ingredients, glutenFree)) {
      tags.push('Gluten-free');
    }
    return tags;
  }

  private ingredientsContain(ingredients: Food[], forbidden: string[]): boolean {
    for (let i = 0; i < forbidden.length; i++) {
      const word = forbidden[i];
      for (let j = 0; j < ingredients.length; j++) {
        console.log(ingredients[j]);
        const desc = ingredients[j].description.toLowerCase();
        if (desc.indexOf(word) > -1 || desc === word) {
          return false;
        }
      }
    }
    return true;
  }
}
