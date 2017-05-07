import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionComponent } from './question.component';
import { QuestionCenterComponent } from './question-center.component';

const _authRoutes: Routes = [

  { path: '', component: QuestionCenterComponent,
    children: [
	  	{ path: '', component: QuestionComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(_authRoutes)],
  exports: [RouterModule],
})

export class QuestionRoutingModule { }
