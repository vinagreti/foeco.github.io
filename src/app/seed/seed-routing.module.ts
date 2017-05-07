import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeedComponent } from './seed.component';
import { SeedCenterComponent } from './seed-center.component';

const _authRoutes: Routes = [

  { path: '', component: SeedCenterComponent,
    children: [
	  	{ path: '', component: SeedComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(_authRoutes)],
  exports: [RouterModule],
})

export class SeedRoutingModule { }
