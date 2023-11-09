import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../../interfaces/user.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  returnAllUsers(): Observable<any[]> {
    return this.http.get<UserInterface[]>(`${environment.baseUrlApi}/users`);
  }

  updateUser(user: UserInterface): Observable<any> {
    return this.http.put(`${environment.baseUrlApi}/users/${user.id}`, {
      email: user.email,
      name: user.name
    })
  }
}
