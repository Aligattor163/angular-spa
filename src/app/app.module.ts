import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {UserPageComponent} from './user-page/user-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from "./app-routing.module";
import {AdminModule} from "./admin/admin.module";
import {UserCardComponent} from './shared/components/user-card/user-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    UserPageComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
