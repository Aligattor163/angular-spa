import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {PostPageComponent} from './post-page/post-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { AdminLayoutComponent } from './admin/shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import {AdminModule} from "./admin/admin.module";
import { PostComponent } from './shared/components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
