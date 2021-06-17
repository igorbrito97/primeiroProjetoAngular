import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceitosIniciaisComponent } from './conceitos-iniciais.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { FormsModule } from '@angular/forms';
// import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    ConceitosIniciaisComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ConceitosIniciaisModule { }
