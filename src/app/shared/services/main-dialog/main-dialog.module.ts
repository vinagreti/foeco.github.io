import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent, AuthComponentModule } from './../../../auth';
import { MainDialogService } from './main-dialog.service';

@NgModule({
  imports: [
  	AuthComponentModule,
    CommonModule,
  ],
  providers: [
  	MainDialogService
  ],
  entryComponents: [
  	AuthComponent
  ]
})
export class MainDialogModule { }
