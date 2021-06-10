import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WelcomeComponent} from "./welcome/welcome.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {LoginComponent} from "./login/login.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./auth/jwt.interceptor";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AutomobileSearchComponent} from "./automobile/automobile-search/automobile-search.component";
import {AutomobileDetailComponent} from "./automobile/automobile-detail/automobile-detail.component";
import {AutomobileCreateComponent} from "./automobile/automobile-create/automobile-create.component";
import {AutomobileSearchResultsComponent} from "./automobile/automobile-search-results/automobile-search-results.component";
import {AutomobileEditComponent} from "./automobile/automobile-edit/automobile-edit.component";
import {AutomobileDeleteComponent} from "./automobile/automobile-delete/automobile-delete.component";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    AutomobileSearchComponent,
    AutomobileSearchResultsComponent,
    AutomobileCreateComponent,
    AutomobileDetailComponent,
    AutomobileEditComponent,
    AutomobileDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
   ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
