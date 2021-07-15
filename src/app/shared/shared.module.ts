import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
    imports: [
      HttpClientModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatToolbarModule
    ],
    exports: [
      HttpClientModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatToolbarModule
    ]
  }
)
export class SharedModule {

}
