import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { PostComponent } from './post.component';
import { PostCenterComponent } from './post-center.component';
import { PostRoutingModule } from './post-routing.module';
import { PostSharedModule } from './shared/post-shared.module';
import { AuthModule } from './../auth/auth.module';
@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    PostSharedModule,
    MaterialModule,
    AuthModule
  ],
  declarations: [
  	PostComponent,
  	PostCenterComponent
  ]
})
export class PostModule { }
