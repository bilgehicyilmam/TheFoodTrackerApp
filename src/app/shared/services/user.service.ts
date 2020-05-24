import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cloneDeep } from 'lodash';

@Injectable()
export class UserService {
  private users = [{
    id: 0,
    email: 'bilge.hicyilmam@boun.edu.tr',
    name: 'Bilge Hicyilmam',
    password: '123456'
  }];

  private currentUser = null;

  constructor() {
  }

  public login(email: string, password: string) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (user.email === email && user.password === password) {
        this.currentUser = user;
        return of(user);
      }
    }
    return of(null);
  }

  public register(name: string, email: string, password: string) {
    const user = { id: this.users.length, name, email, password };
    this.users.push(user);
    return of(cloneDeep(user));
  }

  public getAuthenticatedUser(): Observable<{ name: string, thumb: string }> {
    return of(this.currentUser);
  }

  public isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
}
