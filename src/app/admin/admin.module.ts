import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AdminLayoutComponent} from "./shared/components/admin-layout/admin-layout.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {RegistrationPageComponent} from '../registration-page/registration-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {AuthService} from "./shared/services/auth.service";
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "./shared/services/auth.guard";


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    RegistrationPageComponent,
    EditPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
          {path: 'user-card/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
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
