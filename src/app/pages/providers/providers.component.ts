import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { ProviderService } from '../../shared/services/provider.service';

@Component({
  selector: 'app-providers',
  templateUrl: 'providers.component.html',
  styleUrls: ['providers.component.scss']
})

export class ProvidersComponent implements OnInit {
  email = '';
  password: '';
  loginFailed = false;

  providers$;

  constructor(private userService: UserService, private router: Router, private providerService: ProviderService) {
  }

  ngOnInit() {
    this.providers$ = this.providerService.getProviders(null);
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

  onFilterChange(filter: { [p: string]: string[] | string }) {
    this.providers$ = this.providerService.getProviders(filter);
  }
}
