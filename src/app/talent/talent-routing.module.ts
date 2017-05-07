import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalentComponent } from './talent.component';
import { TalentCenterComponent } from './talent-center.component';

const _authRoutes: Routes = [

  { path: '', component: TalentCenterComponent,
    children: [
	  	{ path: '', component: TalentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(_authRoutes)],
  exports: [RouterModule],
})

export class TalentRoutingModule { }
