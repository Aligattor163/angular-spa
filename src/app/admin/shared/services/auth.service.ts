import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ReqAuthResponse, User, UserCredentials} from "../../../shared/interfaces";
import {Observable, Subject, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {UserService} from "../../../shared/services/user.service";

@Injectable()
export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  get token(): string | null {
    let expDate: any;
    expDate = localStorage.getItem(`reqres-session-expDate`);

    if (expDate != null) {
      expDate = new Date(expDate)
    }

    if (new Date() > expDate) {
      this.logout()
      return null
    }

    return localStorage.getItem('reqres-token')
  }

  login(user: UserCredentials): Observable<any> {
    return this.http.post('https://reqres.in/api/login', user)
      .pipe(
        // @ts-ignore
        tap(
          this.setToken
        ),
        catchError(this.handleError.bind(this))
      )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): Boolean {
    return !!this.token
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    const message = error.error.error
    this.error$.next(message)
    return throwError(error)
  }

  private setToken(response: ReqAuthResponse | null) {
    if (response) {
      const expiresIn = 3600 //set time in seconds
      const expDate = new Date(new Date().getTime() + (expiresIn * 1000))
      localStorage.setItem('reqres-token', response.token)
      localStorage.setItem('reqres-session-expDate', expDate.toString())
    } else {
      localStorage.clear()
    }
  }

  public setCurrentUser(email: string) {
    this.userService.getUserByEmail(email).subscribe((user: User) => {
      if (user.first_name) {
        localStorage.setItem('user_name', user.first_name)
        localStorage.setItem('user_id', user.id.toString())
      }
    })
  }

  public getUserName() {
    return localStorage.getItem('user_name')
  }

  public getUserID() {
    return localStorage.getItem('user_id')
  }
}
