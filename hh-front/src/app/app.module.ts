import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies/companies.component';
import { LoginComponent } from './login/login/login.component';
import { VacanciesComponent } from './vacancies/vacancies/vacancies.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    LoginComponent,
    VacanciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
