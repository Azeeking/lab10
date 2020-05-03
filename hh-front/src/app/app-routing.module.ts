import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies/vacancies.component';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  { path: '', component: CompaniesComponent },
  { path: 'companies/:id', component: VacanciesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
