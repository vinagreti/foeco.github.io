import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';
import { TextareaResizeModule } from '@neoprospecta/angular-textarea-resize';

import { ArticleCenterComponent } from './article-center.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleListComponent } from './article-list.component';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaResizeModule
  ],
  declarations: [ArticleCenterComponent, ArticleDetailComponent, ArticleListComponent],
  exports: [ArticleCenterComponent, ArticleDetailComponent, ArticleListComponent]
})
export class ArticleModule {

}
