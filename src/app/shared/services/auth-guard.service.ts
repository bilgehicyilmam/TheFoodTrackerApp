import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate{


  constructor(public userService: UserService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.userService.isAuthenticated()) {
      this.router.navigate(['login']).then(r => console.log('Redirected to login'));
      return false;
    }
    return true;
  }
}
