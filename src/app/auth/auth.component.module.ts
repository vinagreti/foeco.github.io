import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '@angular/material';

@NgModule({
	imports: [
		MaterialModule
	],
	declarations: [
		AuthComponent,
	],
	exports: [
		AuthComponent,
	]
})
export class AuthComponentModule {}
