import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})

export class RegisterComponent implements OnInit {
  name = '';
  email = '';
  password: '';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  formSubmitted() {
    this.userService.register(this.name, this.email, this.password).subscribe(() => {
      this.userService.login(this.email, this.password).subscribe(() => {
        this.router.navigate(['recipes']);
      });
    });
  }
}
