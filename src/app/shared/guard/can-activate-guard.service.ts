import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../../auth/shared/auth.service';

// Admin Level
@Injectable()
export class AdminGuardService implements CanActivate {
  constructor(private authService :AuthService, private router :Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn() && this.authService.isAdmin()) { return true; }
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/auth']);
    return false;
  }
}

// Customer Level
@Injectable()
export class CustomerGuardService implements CanActivate {
  constructor(private authService :AuthService, private router :Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn() && (this.authService.isCustomer() || this.authService.isDeveloper() || this.authService.isStaff())) { return true; }
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/auth']);
    return false;
  }
}

// Developer Level
@Injectable()
export class DeveloperGuardService implements CanActivate {
  constructor(private authService :AuthService, private router :Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn() && this.authService.isDeveloper()) { return true; }
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/auth']);
    return false;
  }
}

// Logged Level
@Injectable()
export class LoggedGuardService implements CanActivate {
  constructor(private authService :AuthService, private router :Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) { return true; }
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/auth']);
    return false;
  }
}

// Public Level
@Injectable()
export class PublicGuardService implements CanActivate {
  constructor(private authService :AuthService, private router :Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/feed']);
      return false;
    } else {
      return true;
    }
  }
}

// Staff Level
@Injectable()
export class StaffGuardService implements CanActivate {
  constructor(private authService :AuthService, private router :Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn() && (this.authService.isStaff() || this.authService.isDeveloper())) { return true; }
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/auth']);
    return false;
  }
}
