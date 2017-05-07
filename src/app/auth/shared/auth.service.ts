import { AngularFire, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { FirebaseObjectObservable } from 'angularfire2';
import { database } from 'firebase';
import { User } from './../../user/user.model';
import { JsonStorageService } from './../../json-storage/json-storage.service';

@Injectable()
export class AuthService {

  public user: BehaviorSubject<User>;
  private _user: User;
  redirectUrl: string;

  constructor( 
    private af: AngularFire,
    private jsonStorageService: JsonStorageService,
    private router: Router
  ) {
    console.info('AUTH SERVICE STARTED');
    this.user = new BehaviorSubject<User>(undefined);
    this._user = new User();
    this.subscribeToUser();
    this.subscribeToStorage();
    this.subscribeToNgFire();
  }

  private subscribeToUser(){
    this.user.subscribe((user: User) => {
      this._user = user;
    });
  }

  private setUserAuth(authData){
    this.jsonStorageService.get("user").then((user: User) => {
      if(!user){
        user = new User();
      }
      user.auth = (authData && authData !== null) ? authData : undefined;
      this.jsonStorageService.set("user", user);
    });
  }

  private subscribeToNgFire(){
    this.af.auth.subscribe(user => {
      this.setUserAuth(user);
    });
  }

  private subscribeToStorage(){
    this.jsonStorageService.object("user").subscribe((user: User) => {
      this.user.next(user);
    });
  }

  private handleLoginError = (err) => {
    return err;
  }

  private handleLoginSuccess = (user) => {
    this.setUserAuth(user);
    this.router.navigate([this.redirectUrl ? this.redirectUrl : '/feed']);
  }

  loginGoogle = () => {
    return this.af.auth.login({
      provider: AuthProviders.Google
    }).then(this.handleLoginSuccess, this.handleLoginError);
  }

  loginFacebook = () => {
    return this.af.auth.login({
      provider: AuthProviders.Facebook
    })
    .then(this.handleLoginError);
  }

  loginGithub = () => {
    return this.af.auth.login({
      provider: AuthProviders.Github
    }).then(this.handleLoginSuccess, this.handleLoginError);
  }

  loginTwitter = () => {
    return this.af.auth.login({
      provider: AuthProviders.Twitter
    }).then(this.handleLoginSuccess, this.handleLoginError);
  }

  logout = () => {
    this.af.auth.logout();
    this._user = this._user ? this._user : new User();
    this._user.auth = undefined;
    this.user.next(this._user);
  }

  getUser = () => {
    return this._user.auth ? this._user : false;
  }

  isLoggedIn = () => {
    return this._user.auth ? this._user : false;
  }

  isAdmin = () => {
    return this._user.auth ? this._user : false;
  }

  isCustomer = () => {
    return this._user.auth ? this._user : false;
  }

  isDeveloper = () => {
    return this._user.auth ? this._user : false;
  }

  isStaff = () => {
    return this._user.auth ? this._user : false;
  }

  fillAuthor = (obj: any) => {
    let user = this._user;
    obj.author = {
      name: user.auth.auth.displayName,
      picture: user.auth.auth.photoURL,
      uid: user.auth.auth.uid,
      date: database.ServerValue.TIMESTAMP
    }
    return obj;
  }

}
