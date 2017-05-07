import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { MaterialModule } from '@angular/material';
import { TextareaResizeModule } from '@neoprospecta/angular-textarea-resize';
@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule,
    MaterialModule,
    TextareaResizeModule
  ],
  declarations: [FeedComponent]
  
})
export class FeedModule {}
