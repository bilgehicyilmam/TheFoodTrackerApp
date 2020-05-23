import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, flatMap, map } from 'rxjs/operators';
import { RecipeService } from '../../../../shared/services/recipe.service';
import { Food } from '../../../../shared/models/food';
import { UploadService } from '../../../../shared/services/upload.service';

@Component({
  selector: 'app-create-recipe-modal',
  templateUrl: './create-recipe-modal.component.html',
  styleUrls: ['./create-recipe-modal.component.scss']
})
export class CreateRecipeModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() closed = new EventEmitter<void>();

  public recipe: any = {
    nutrients: {},
    thumbUrl: ''
  };
  public ingredientModel;
  public ingredientValue;
  public ingredients: Food[] = [];

  public showNutrientDetails: boolean;

  public totalCalorie;

  public objectKeys = Object.keys;

  private recipePicture;

  public searchLoading = false;

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
      console.log(item.foodPortions);
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
    this.uploadService.uploadFile(this.recipePicture).pipe(flatMap(res => {
      this.recipe.thumbUrl = res.Location;
      return this.recipeService.createRecipe(this.recipe);
    }));
  }
}
