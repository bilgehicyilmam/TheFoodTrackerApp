import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
  email = '';
  password: '';
  loginFailed = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  formSubmitted() {
    this.userService.login(this.email, this.password).subscribe(res => {
      if (!res) {
        this.loginFailed = true;
      } else {
        this.loginFailed = false;
        this.router.navigate(['recipes']);
      }
    });
  }
}
