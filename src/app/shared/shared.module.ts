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
import { AuthGuardService } from './services/auth-guard.service';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { LowercasePipe } from './pipes/lowercase.pipe';
import { CommonModule } from '@angular/common';
import { ProviderService } from './services/provider.service';
import { MapsService } from './services/maps.service';


@NgModule({
  imports: [RouterModule, HttpClientModule, CommonModule],
  exports: [OrderPipe, NavigationComponent, LimitPipe, RecipeFilterPipe, ModalComponent, MultiSelectComponent],
  declarations: [OrderPipe, NavigationComponent, LimitPipe, RecipeFilterPipe, ModalComponent, MultiSelectComponent, LowercasePipe],
  providers: [RecipeService, UploadService, AuthGuardService, ProviderService],
})
export class SharedModule {
}
