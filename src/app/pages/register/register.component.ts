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
    longitude: 28.9783589,
    phoneNumber: '',
    website: '',
    details: '',
    restaurant: false,
    tags: [],
    preferences: '',
    allergens: null
  };


  private userPicture: any;

  public addressFormatter = (f) => f.formatted_address;

  constructor(private userService: UserService,
              private router: Router,
              private geocode: AgmGeocoder,
              private uploadService: UploadService) {
  }

  ngOnInit() {
  }

  formSubmitted() {
    const userThumbUpload = this.userPicture ? this.uploadService.uploadFile(this.userPicture) : of(null);

    if (this.user.allergens) {
      this.user.allergens = this.user.allergens.split(',').map(a => a.trim());
    }

    userThumbUpload.pipe(flatMap(userThumbRes => {
      if (userThumbRes) {
        this.user.thumb = userThumbRes.Location;
      }
      // tslint:disable-next-line:no-string-literal
      if (this.user.address && this.user.address['formatted_address']) {
        // tslint:disable-next-line:no-string-literal
        this.user.address = this.user.address['formatted_address'];
      }
      return this.userService.register(this.user).pipe(flatMap(() => {
        return this.userService.login(this.user.email, this.user.password);
      }));
    })).subscribe(() => {
      this.router.navigate(['recipes']);
    });
  }

  markerDragged({ coords }) {
    this.user.latitude = coords.lat;
    this.user.longitude = coords.lng;
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

  onSelectThumb($event) {
    this.userPicture = $event.target.files[0];
  }

  onAddressSelect($event: NgbTypeaheadSelectItemEvent) {
    const location = $event.item.geometry.location;
    this.user.latitude = location.lat();
    this.user.longitude = location.lng();
  }

  onTagChange($event: any, tagValue: string) {
    const value = $event.currentTarget.checked;
    if (value) {
      this.user.tags.push(tagValue);
    } else {
      this.user.tags = this.user.tags.filter(t => t !== tagValue);
    }
  }
}
