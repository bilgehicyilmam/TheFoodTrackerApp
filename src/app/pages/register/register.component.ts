import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { AgmGeocoder } from '@agm/core';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { catchError, debounceTime, distinctUntilChanged, flatMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UploadService } from '../../shared/services/upload.service';
import { ProviderService } from '../../shared/services/provider.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})

export class RegisterComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
    thumb: null,
    address: '',
    latitude: 41.0082376,
    longitude: 28.9783589
  };

  restaurant = {
    name: '',
    website: '',
    phoneNumber: '',
    details: '',
    thumb: null,
    address: '',
    latitude: 41.0082376,
    longitude: 28.9783589
  };

  public isCreateRestaurant;

  private restaurantPicture: any;

  private userPicture: any;

  public addressFormatter = (f) => f.formatted_address;

  constructor(private userService: UserService,
              private router: Router,
              private geocode: AgmGeocoder,
              private uploadService: UploadService,
              private providerService: ProviderService) {
  }

  ngOnInit() {
  }

  formSubmitted() {
    const userThumbUpload = this.userPicture ? this.uploadService.uploadFile(this.userPicture) : of(null);

    userThumbUpload.pipe(flatMap(userThumbRes => {
      if (userThumbRes) {
        this.user.thumb = userThumbRes.Location;
      }
      return this.userService.register(this.user).pipe(flatMap(() => {
        if (this.isCreateRestaurant) {
          const restaurantThumbUpload = this.restaurantPicture ? this.uploadService.uploadFile(this.restaurantPicture) : of(null);
          return restaurantThumbUpload.pipe(flatMap(restaurantThumbRes => {
            if (restaurantThumbRes) {
              this.restaurant.thumb = restaurantThumbRes.Location;
            }
            return this.providerService.createProvider(this.restaurant).pipe(flatMap(() => {
              return this.userService.login(this.user.email, this.user.password);
            }));
          }));
        } else {
          return this.userService.login(this.user.email, this.user.password);
        }
      }));
    })).subscribe(() => {
      this.router.navigate(['providers']);
    });
  }

  restaurantMarkerDragged({ coords }) {
    this.restaurant.latitude = coords.lat;
    this.restaurant.longitude = coords.lng;
  }

  addressSearch(text$: Observable<string>) {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      flatMap(term => {
        return term.length < 2 ? of([]) : this.geocode.geocode({ address: term }).pipe(catchError(err => {
          return of([]);
        }));
      }));
  }

  onAddressSelect($event: NgbTypeaheadSelectItemEvent) {
    const location = $event.item.geometry.location;
    this.restaurant.latitude = location.lat();
    this.restaurant.longitude = location.lng();
  }

  onSelectRestaurantThumb($event) {
    this.restaurantPicture = $event.target.files[0];
  }

  onSelectUserThumb($event) {
    this.userPicture = $event.target.files[0];
  }

  onUserAddressSelect($event: NgbTypeaheadSelectItemEvent) {
    const location = $event.item.geometry.location;
    this.user.latitude = location.lat();
    this.user.longitude = location.lng();
  }
}
