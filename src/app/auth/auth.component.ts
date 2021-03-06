import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user;
  title: string;
  subtitle: string;
  closeDialogRef: Function;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    console.log("AUTH COMPONENT INICIADO");
    this.title = 'Entrar';
    this.subtitle = 'Acesse a Feira Orgânica com uma de suas redes sociais e tenha acesso todo o nosso conteúdo.';
  }

  ngOnInit(){
    this.authService.user.subscribe(user => {
      if(user && user.auth){
        this.router.navigate(['/feed']);
      }
    });
  }

  loginGoogle = () => {
    this.authService.loginGoogle()
    .then(() => {
      if(this.closeDialogRef){
        this.closeDialogRef();
      }
    });
  }

  loginFacebook = () => {
    this.authService.loginFacebook()
    .then(() => {
      if(this.closeDialogRef){
        this.closeDialogRef();
      }
    });
  }

  loginGithub = () => {
    this.authService.loginGithub()
    .then(() => {
      if(this.closeDialogRef){
        this.closeDialogRef();
      }
    });
  }

  loginTwitter = () => {
    this.authService.loginTwitter()
    .then(() => {
      if(this.closeDialogRef){
        this.closeDialogRef();
      }
    });
  }

}
