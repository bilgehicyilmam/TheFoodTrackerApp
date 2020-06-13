import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './userprofile.component';
import { UserProfileRoutingModule } from './userprofile-routing.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserProfileRoutingModule,
    FormsModule,
    NgbTypeaheadModule,
    AgmCoreModule
  ],
  exports: [UserProfileComponent]
})
export class UserProfileModule {
}
