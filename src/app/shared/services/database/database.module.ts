import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './../../../auth/shared/auth.service';
import { DatabaseService } from './database.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
  	AuthService,
  	DatabaseService
  ]
})
export class DatabaseModule { }
