import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { BaseModule } from '../../../pages/base/base.module';

import { AuthenticationPage } from '../authentication/authentication.component';
import { RegistrationPage } from '../registration/registration.component';


@NgModule({
  declarations: [
    AuthenticationPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BaseModule
  ],

  providers: [ ]
})
export class QuizModule {}


