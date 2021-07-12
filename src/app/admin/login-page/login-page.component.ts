import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup

  constructor() {
    this.form = new FormGroup({
        email: new FormControl(null, [
          Validators.email,
          Validators.required
        ]),
        password: new FormControl(null,[
          Validators.required,
          Validators.minLength(6)
        ])
      }
    )
  }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.form)
    if (this.form.invalid){
      return
    }
  }
}
