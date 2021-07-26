import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/interfaces";
import {AuthService} from "../shared/services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormsErrorStateMatcher} from "../../shared/formsErrorStateMatcher";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup
  hide: Boolean = true
  matcher = new FormsErrorStateMatcher()
  message: string

  constructor(public auth: AuthService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.loginForm = new FormGroup({
        email: new FormControl(null, [
          Validators.email,
          Validators.required
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ])
      }
    )
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Please login again'
      }
    })
  }

  submit() {
    if (this.loginForm.invalid) {
      return
    }

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.auth.login(user).subscribe(() => {
      this.loginForm.reset()
      this.router.navigate(['/admin', 'dashboard'])
    })
  }
}
