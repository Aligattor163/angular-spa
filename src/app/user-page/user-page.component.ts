import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "../shared/interfaces";
import {switchMap} from "rxjs/operators";
import {UserService} from "../shared/services/user.service";
import {AuthService} from "../admin/shared/services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user: User

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              public auth: AuthService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
          return this.userService.getUserByID(params['id'])
        }
      )
    ).subscribe((response) => {
      this.user = response.data
      this.user.description = response.support.text
    })
  }


}
