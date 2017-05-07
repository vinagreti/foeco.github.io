import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post.component';
import { PostEditComponent } from './shared/post-edit/post-edit.component';
import { PostCenterComponent } from './post-center.component';

const _authRoutes: Routes = [

  { path: '', component: PostCenterComponent,
    children: [
      { path: ':id',  component: PostEditComponent },
      { path: '',     component: PostComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(_authRoutes)],
  exports: [RouterModule]
})

export class PostRoutingModule { }
