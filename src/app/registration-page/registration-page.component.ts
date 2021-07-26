import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {FormsErrorStateMatcher} from "../shared/formsErrorStateMatcher";

@Component({
  selector: 'app-create-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  registrationForm: FormGroup
  hide: Boolean = true
  matcher = new FormsErrorStateMatcher()

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email
      ]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      password2: this.formBuilder.control('')
    })

    this.registrationForm.setValidators(this.checkPasswords)
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): null | ValidationErrors => {
    const password1 = group.get('password')?.value
    const password2Control = group.get('password2')

    if (password1 !== password2Control?.value) {
      password2Control?.setErrors({notSame: true})
    }
    console.log(password1, password2Control?.value)
    return null
  }
}
