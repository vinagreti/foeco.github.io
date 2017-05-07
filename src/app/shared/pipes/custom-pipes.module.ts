import { NgModule }       from '@angular/core';

import { FilterPipe } from './filter.pipe';
import { OrderByPipe } from './order-by.pipe';
import { KeysPipe } from './keys.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    OrderByPipe,
    KeysPipe,
    SafeHtmlPipe
  ],
  exports: [
    FilterPipe,
    OrderByPipe,
    KeysPipe,
    SafeHtmlPipe
  ]
})
export class CustomPipesModule {}
