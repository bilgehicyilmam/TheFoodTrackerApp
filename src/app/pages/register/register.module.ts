import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule,
    FormsModule,
    NgbTypeaheadModule,
    AgmCoreModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule {
}
