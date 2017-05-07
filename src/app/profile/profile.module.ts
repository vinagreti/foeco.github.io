import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileService } from './profile.service';
import { JsonStorageModule } from './../json-storage/json-storage.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    JsonStorageModule
  ],
  exports: [
    ProfileComponent
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    ProfileService,
  ]
})
export class ProfileModule { }
