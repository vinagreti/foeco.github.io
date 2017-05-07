import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AuthService } from './../../../auth/shared/auth.service';
import { AuthComponent } from './../../../auth/auth.component';

@Injectable()
export class MainDialogService {

	constructor(
		private mdDialog: MdDialog,
		private auth: AuthService
	) { }

	open = (config): MdDialogRef<any> | boolean => {
		if(config){
			if(!config.public && this.auth.isLoggedIn()){
				if(config.component){
					let authDialogRef = this.mdDialog.open(config.component, config.style);
					authDialogRef.componentInstance['closeDialogRef'] = () => authDialogRef.close();
				} else {
					return false;					
				}
			} else {
				let dialogRef = this.mdDialog.open(AuthComponent, config.style);
				dialogRef.componentInstance.closeDialogRef = () => dialogRef.close();
				
				if (config.title) 
					dialogRef.componentInstance.title = config.title;
				if (config.subtitle) 
					dialogRef.componentInstance.subtitle = config.subtitle;
				return dialogRef;
			}
		} else {
			return false;
		}
	};

}
