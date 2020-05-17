import { NgModule } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { OrderPipe } from './pipes/order.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LimitPipe } from './pipes/limit.pipe';
import { RecipeFilterPipe } from './pipes/recipe-filter.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { UploadService } from './services/upload.service';


@NgModule({
  imports: [RouterModule, HttpClientModule],
  exports: [OrderPipe, NavigationComponent, LimitPipe, RecipeFilterPipe, ModalComponent],
  declarations: [OrderPipe, NavigationComponent, LimitPipe, RecipeFilterPipe, ModalComponent],
  providers: [RecipeService, UploadService],
})
export class SharedModule {
}
