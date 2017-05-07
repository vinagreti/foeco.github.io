import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductCenterComponent } from './product-center.component';

const _authRoutes: Routes = [

  { path: '', component: ProductCenterComponent,
    children: [
	  	{ path: '', component: ProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(_authRoutes)],
  exports: [RouterModule],
})

export class ProductRoutingModule { }
