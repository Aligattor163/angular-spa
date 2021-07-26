import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [
      HttpClientModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatToolbarModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatOptionModule,
      MatInputModule,
      MatIconModule
    ],
    exports: [
      HttpClientModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatToolbarModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatOptionModule,
      MatInputModule,
      MatIconModule
    ]
  }
)
export class SharedModule {

}
