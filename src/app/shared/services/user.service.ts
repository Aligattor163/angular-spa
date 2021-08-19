import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {SingleUserReqresResponse, User, UsersReqresResponse} from "../interfaces";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(pageNum: number): Observable<UsersReqresResponse> {

    return this.http.get<UsersReqresResponse>('https://reqres.in/api/users?page=' + pageNum)
      .pipe(map((response: UsersReqresResponse) => {
          return response
        }
      ))
  }

  getUserByID(id: String): Observable<SingleUserReqresResponse> {
    return this.http.get<SingleUserReqresResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(map((response: SingleUserReqresResponse) => {
          return response
        }
      ))
  }
}
