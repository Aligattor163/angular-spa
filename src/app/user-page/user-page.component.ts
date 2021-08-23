import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "../shared/interfaces";
import {switchMap} from "rxjs/operators";
import {UserService} from "../shared/services/user.service";
import {AuthService} from "../admin/shared/services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user: User
  userForm: FormGroup
  isEdit: boolean = false

  avatarHttpUrl: string = this.route.url + 'jax-rs-jersey-application-sample'

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
      this.userForm = new FormGroup({
          email: new FormControl(
            this.user.email,
            [Validators.email, Validators.required]
          ),
          firstName: new FormControl(
            this.user.first_name,
            [Validators.required]
          ),
          lastName: new FormControl(
            this.user.last_name,
            [Validators.required]
          ),
          description: new FormControl(this.user.description)
        }
      )
    })
  }

  submit() {
    this.user.email = this.userForm.value.email
    this.user.first_name = this.userForm.value.firstName
    this.user.last_name = this.userForm.value.lastName
    this.user.description = this.userForm.value.description

    this.isEdit = false
  }
}
