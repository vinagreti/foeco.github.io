import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/shared/auth.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: [
		'./home.component.scss'
	]
})

export class HomeComponent implements OnInit {

	user: any;
	title: string = 'Feira Orgânica';
	slogan: string = 'Talento, Alimento e Conhecimento';

	constructor(
		public authService: AuthService
	){}

	ngOnInit(){
		this.authService.user.subscribe(user => this.user = user);
	}
}
