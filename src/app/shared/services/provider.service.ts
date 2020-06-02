import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class ProviderService {

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
}
