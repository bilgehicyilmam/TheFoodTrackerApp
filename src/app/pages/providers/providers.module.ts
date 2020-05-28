import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ProvidersComponent } from './providers.component';
import { ProvidersRoutingModule } from './providers-routing.module';
import { ProviderFilterComponent } from './components/provider-filter/provider-filter.component';


@NgModule({
  declarations: [ProvidersComponent, ProviderFilterComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProvidersRoutingModule,
    FormsModule,
    NgbTypeaheadModule
  ],
  exports: [ProvidersComponent]
})
export class ProvidersModule {
}
