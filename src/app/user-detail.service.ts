import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor() { }
  users: User[] = [];
  
  /**
   * 
   * @returns Observable<User[]> of users
   */
  public getUsers(): Observable<User[]> {
    for(let i = 0; i<10; i++) {
      const user: User = {
        userId: i,
        name: "Jhonny_" + i.toString(),
        age: Math.floor(Math.random()*10) + i
      };
      this.users.push(user);
    }
    return of(this.users);
  }
}
