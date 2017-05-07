import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './feed.component';

const _authRoutes: Routes = [

  { path: '', component: FeedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(_authRoutes)],
  exports: [RouterModule]
})

export class FeedRoutingModule { }
