import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RecipeFilterComponent } from './components/recipe-filter/recipe-filter.component';
import { FormsModule } from '@angular/forms';
import { CreateRecipeModalComponent } from './components/create-recipe-modal/create-recipe-modal.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeDetailsModalComponent } from './components/recipe-details-modal/recipe-details-modal.component';


@NgModule({
  declarations: [RecipesComponent, RecipeFilterComponent, CreateRecipeModalComponent, RecipeDetailsModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    RecipesRoutingModule,
    FormsModule,
    NgbTypeaheadModule
  ],
  exports: [RecipesComponent]
})
export class RecipesModule {
}
