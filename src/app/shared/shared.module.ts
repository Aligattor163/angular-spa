import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";

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
      MatToolbarModule,
      MatCardModule
    ]
  }
)
export class SharedModule {

}
