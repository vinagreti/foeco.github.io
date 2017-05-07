import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostEditDialogComponent } from './post-edit-dialog/post-edit-dialog.component';
import { MaterialModule } from '@angular/material';
import { PostService } from './post.service';
import { UploadModule } from './../../upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    UploadModule
  ],
  declarations: [
    PostEditComponent,
    PostEditDialogComponent,
  ],
  entryComponents: [
    PostEditComponent,
    PostEditDialogComponent,
  ],
  exports: [
    PostEditComponent
  ],
  providers: [
    PostService,
    PostEditDialogComponent
  ]
})
export class PostSharedModule { }
