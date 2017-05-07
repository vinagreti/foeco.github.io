import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogCenterComponent }    from './blog-center.component';
import { BlogDetailComponent } from './blog-detail.component';
import { BlogListComponent } from './blog-list.component';

const _blogRoutes: Routes = [

  { path: '', component: BlogCenterComponent,
    children: [
      { path: ':id',  component: BlogDetailComponent },
      { path: '',     component: BlogListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(_blogRoutes)],
  exports: [RouterModule],
  providers: []
})
export class BlogRoutingModule { }
