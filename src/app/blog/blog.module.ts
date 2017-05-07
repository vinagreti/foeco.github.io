import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogCenterComponent } from './blog-center.component';
import { BlogDetailComponent } from './blog-detail.component';
import { BlogListComponent } from './blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CustomPipesModule } from './../shared/pipes/custom-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    CustomPipesModule,
	  BlogRoutingModule,
  ],
  declarations: [
  	BlogCenterComponent,
  	BlogDetailComponent,
  	BlogListComponent
  ]
})
export class BlogModule { }
