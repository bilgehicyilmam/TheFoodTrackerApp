import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { cloneDeep } from 'lodash';
import { UserService } from './user.service';

@Injectable()
export class ProviderService {

  private providers = [
    {
      id: 0,
      name: 'The Bird',
      location: 'Prenzlauer Berg',
      tags: ['Vegan'],
      website: '',
      phoneNumber: '',
      details: '',
      thumb: null,
      address: '',
      latitude: 0,
      longitude: 0,
      userId: 0
    }
  ];

  constructor(private httpClient: HttpClient, private userService: UserService) {
  }

  public getProviders(filter: { [p: string]: string[] | string }): Observable<any> {
    return this.userService.getProviders().pipe(
      map(res => this.filterRestaurants(res, filter))
    );
  }

  private filterRestaurants(res, filter) {
    if (!filter) {
      return res;
    }
    let restaurants = this.filterBySelections(res, filter);
    restaurants = this.searchByRestaurantName(restaurants, filter);
    return restaurants;
  }

  private filterBySelections(reservations, filter) {
    for (const key in filter) {
      if (filter[key] && filter[key].length > 0) {
        reservations = reservations.filter(r => {
          const f = filter[key];
          if (key !== 'restaurant' && key !== 'date') {
            const fields = r[key];
            for (let i = 0; i < fields.length; i++) {
              return f.indexOf(fields[i]) !== -1;
            }
          }
          return true;
        });
      }
    }
    return reservations;
  }

  private searchByRestaurantName(restaurants: any, filter: any) {
    if (filter.restaurant) {
      const words = filter.restaurant.split(' ');
      restaurants = restaurants.filter(r => {
        for (const word of words) {
          const searchStr = word.toLowerCase();
          if (r.name.toLowerCase().indexOf(searchStr) !== -1) {
            return true;
          }
        }
        return false;
      });
    }
    return restaurants;
  }

  createProvider(provider): Observable<any> {
    provider.id = this.providers.length;
    this.providers.push(cloneDeep(provider));
    console.log(provider);
    return of(provider);
  }
}
