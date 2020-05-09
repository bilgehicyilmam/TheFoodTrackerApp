import { NgModule } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { OrderPipe } from './pipes/order.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LimitPipe } from './pipes/limit.pipe';
import { RecipeFilterPipe } from './pipes/recipe-filter.pipe';


@NgModule({
  imports: [RouterModule, HttpClientModule],
  exports: [OrderPipe, NavigationComponent, LimitPipe, RecipeFilterPipe],
  declarations: [OrderPipe, NavigationComponent, LimitPipe, RecipeFilterPipe],
  providers: [RecipeService],
})
export class SharedModule {
}
