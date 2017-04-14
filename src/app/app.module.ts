import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {AppComponent} from "./app.component";
import {AgmCoreModule} from "angular2-google-maps/core";
import {RouterModule} from "@angular/router";
const ROUTES = [
  {
    path: '',
    redirectTo: 'lineAdd',
    pathMatch: 'full'
  },
  {
    path: 'lineAdd',
    component: AppComponent
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvoWZtV-hRbQUIP6LqhJTNKAL2nIqpJQM'
    }),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
