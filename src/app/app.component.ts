import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/shared/auth.service';
import { ProfileService } from './profile/profile.service';
import { User } from './user/user.model';
import { BehaviorSubject } from 'rxjs';
import { PostService } from './post/shared/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  brandName = 'FOEco';
  title = 'Feira Orgânica';
  user: User;
  event;

  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    public postService: PostService,
  ){
    console.info("APP COMPONENT STARTED")
  }

  ngOnInit(){
    this.subscribeToUser();
    this.subscribeToRoute();
  }

  private subscribeToRoute(){
    this.router.events.subscribe(event => {
      this.event = event;
    })
  }

  private subscribeToUser(){
    this.authService.user.subscribe((user: User) => {
      if(user){
        this.user = user;
      }
    });
  }

  isInPath(path){
    return this.event ? (path == this.event.url) : false;
  }

  isLogged = (): boolean => {
    return (this.user && this.user.auth) ? true : false;
  }

}
