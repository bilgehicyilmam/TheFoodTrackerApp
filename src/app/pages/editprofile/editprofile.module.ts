import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { EditProfileRoutingModule } from './editprofile-routing.module';
import {EditProfileComponent} from "./editprofile.component";


@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    EditProfileRoutingModule,
    FormsModule,
    NgbTypeaheadModule
  ],
  exports: [EditProfileComponent]
})
export class EditProfileModule {
}
