import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {LoginPageComponent} from "./admin/login-page/login-page.component";
import {AuthGuard} from "./admin/shared/services/auth.guard";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'registration', component: RegistrationPageComponent},
      {path: 'user-page/:id', component: UserPageComponent}
    ]
  },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
