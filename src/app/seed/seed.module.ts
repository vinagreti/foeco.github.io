import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeedComponent } from './seed.component';
import { SeedRoutingModule } from './seed-routing.module';
import { MaterialModule } from '@angular/material';
import { SeedCenterComponent } from './seed-center.component';

@NgModule({
  imports: [
    CommonModule,
    SeedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
  	SeedComponent,
  	SeedCenterComponent
  ]
})
export class SeedModule { }
