import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AdminLayoutComponent} from "./shared/components/admin-layout/admin-layout.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationPageComponent} from '../registration-page/registration-page.component';
import {AuthService} from "./shared/services/auth.service";
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "./shared/services/auth.guard";
import {UserPageComponent} from "../user-page/user-page.component";
import {HomePageComponent} from "../home-page/home-page.component";


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', component: HomePageComponent},
          {path: 'login', component: LoginPageComponent},
          {path: 'register', component: RegistrationPageComponent},
          {path: 'user-page/:id', component: UserPageComponent}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService, AuthGuard
  ]

})
export class AdminModule {

}
