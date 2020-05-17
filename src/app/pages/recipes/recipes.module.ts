import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeFilterComponent } from './components/recipe-filter/recipe-filter.component';
import { FormsModule } from '@angular/forms';
import { CreateRecipeModalComponent } from './components/create-recipe-modal/create-recipe-modal.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [RecipesComponent, RecipeListComponent, RecipeFilterComponent, CreateRecipeModalComponent],
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
