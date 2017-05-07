import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlternativeComponent } from './alternative.component';
import { AlternativeRoutingModule } from './alternative-routing.module';
import { MaterialModule } from '@angular/material';
import { AlternativeCenterComponent } from './alternative-center.component';

@NgModule({
  imports: [
    CommonModule,
    AlternativeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
  	AlternativeComponent,
  	AlternativeCenterComponent
  ]
})
export class AlternativeModule { }
