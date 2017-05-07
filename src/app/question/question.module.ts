import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './question.component';
import { QuestionRoutingModule } from './question-routing.module';
import { MaterialModule } from '@angular/material';
import { QuestionCenterComponent } from './question-center.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
  	QuestionComponent,
  	QuestionCenterComponent
  ]
})
export class QuestionModule { }
