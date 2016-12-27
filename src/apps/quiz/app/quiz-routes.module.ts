import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { RegistrationPage } from '../pages/authentication/registration/registration.component';
import { LoginPage } from '../pages/authentication/login/login.component';
import { QuestionsComponent } from '../pages/quiz/questions/questions';
const appRoutes: Routes = [

  { path: '', component: LoginPage },
  { path: 'register', component: RegistrationPage },
  { path: 'login', component: LoginPage },
  { path: 'questions', component: QuestionsComponent }
  // { path: 'register', component: RegistrationPage}
];

@NgModule({

  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forChild( appRoutes )
    
  ],
  providers: [ ]
})
export class QuizRoutingModule {}


