import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalentComponent } from './talent.component';
import { TalentRoutingModule } from './talent-routing.module';
import { MaterialModule } from '@angular/material';
import { TalentCenterComponent } from './talent-center.component';

@NgModule({
  imports: [
    CommonModule,
    TalentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
  	TalentComponent,
  	TalentCenterComponent
  ]
})
export class TalentModule { }
