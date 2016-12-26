import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { QuizModule } from '../apps/quiz/app/quiz.module';

import { AppComponent } from './app.component';

import { HomePage } from '../pages/home/home';
import { HelpPage } from '../pages/help/help';
import { RegistrationPage } from '../apps/quiz/registration/registration.component';
import { AuthenticationPage } from '../apps/quiz/authentication/authentication.component';

const appRoutes: Routes = [
  { path: 'help', component: HelpPage},
  { path: '', component: AuthenticationPage },
  { path: 'register', component: RegistrationPage },
  { path: 'login', component: AuthenticationPage }
  // { path: 'register', component: RegistrationPage}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HelpPage
],
  imports: [
    BrowserModule,
    HttpModule,
    QuizModule,
    RouterModule.forRoot( appRoutes )
    
  ],
  bootstrap: [ AppComponent ],
  providers: [ ]
})
export class AppModule {}


