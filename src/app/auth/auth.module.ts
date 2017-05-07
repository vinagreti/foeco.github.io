import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms'

import { AuthLogoutComponent } from './auth-logout.component';
import { AuthCenterComponent }    from './auth-center.component';
import { AuthComponentModule } from './auth.component.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports:[
    AuthComponentModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdIconModule,
    AuthRoutingModule
  ],
  exports: [
    AuthLogoutComponent,
    AuthCenterComponent
  ],
  declarations: [
    AuthLogoutComponent,
    AuthCenterComponent
  ],
  providers: [
  ]
})
export class AuthModule {}
