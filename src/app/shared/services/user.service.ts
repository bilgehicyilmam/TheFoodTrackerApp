import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cloneDeep } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<boolean> = new EventEmitter();

  private currentUser = null;

  // private api = 'http://ec2-3-134-80-99.us-east-2.compute.amazonaws.com:8080/users';
  private api = 'http://localhost:8080/users';


  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string) {
    return this.http.post(this.api + '/login', { email, password }).pipe(map(res => {
      this.currentUser = res;
      if (res === null) {
        return res;
      }
      this.loggedIn.emit(true);
      this.username.emit(this.currentUser.name);
      return res;
    }));
  }

  public register(user) {
    return this.http.post(this.api, user);
  }

  public getAuthenticatedUser(): Observable<{ id: number, name: string, thumb: string }> {
    return of(this.currentUser);
  }

  public getAuthenticatedUserSync(): Observable<{ name: string, thumb: string }> {
    return this.currentUser;
  }

  public isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getUsers() {
    return this.http.get<any[]>(this.api).pipe(map(users => {
      return users.filter(u => !u.restaurant);
    }));
  }

  getProviders() {
    return this.http.get<any[]>(this.api).pipe(map(users => {
      return users.filter(u => u.restaurant);
    }));
  }

  logout() {
    this.currentUser = null;
  }
}
