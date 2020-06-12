import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
  }

}