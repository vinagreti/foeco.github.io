import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { UploadComponent } from './upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    UploadComponent
  ],
  exports: [
    UploadComponent
  ],
  entryComponents: [
    UploadComponent
  ],
  providers: [
  ]
})
export class UploadModule { }
