import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { ProviderService } from '../../shared/services/provider.service';
import { map, filter } from 'rxjs/operators';

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

  address = null;

  constructor(private userService: UserService, private router: Router, private providerService: ProviderService) {
  }

  ngOnInit() {
    return this.getProviders();
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

  onFilterChange(q: { [p: string]: string[] | string }) {
    return this.getProviders(q);
  }

  getProviders(q = {}) {
    this.providers$ = this.providerService.getProviders(q).pipe(map(providers => {
      if (this.userService.getAuthenticatedUser()) {
        providers.forEach(p => {
          p.distance = this.getDistance(p, this.userService.getAuthenticatedUserSync());
        });
        providers.sort((a, b) => a.distance - b.distance);
        if (this.address && this.address.length > 0) {
          providers = providers.filter(provider => {
              const address = provider.address || '';
              return address.toLowerCase().indexOf(this.address.toLowerCase()) > -1;
            }
          );
        }
      }
      return providers;
    }));
  }


  getDistance(p1, p2) {
    const R = 6378137; // Earth’s mean radius in meter
    const dLat = this.rad(p2.latitude - p1.latitude);
    const dLong = this.rad(p2.longitude - p1.longitude);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.latitude)) * Math.cos(this.rad(p2.latitude)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d; // returns the distance in meter
  }

  rad(x) {
    return x * Math.PI / 180;
  }

  onAddressFilterChange(address) {
    this.address = address;
    return this.getProviders();
  }
}
