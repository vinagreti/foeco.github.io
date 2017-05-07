import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlternativeComponent } from './alternative.component';
import { AlternativeCenterComponent } from './alternative-center.component';

const _authRoutes: Routes = [

  { path: '', component: AlternativeCenterComponent,
    children: [
	  	{ path: '', component: AlternativeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(_authRoutes)],
  exports: [RouterModule],
})

export class AlternativeRoutingModule { }
