import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BaseModule } from '../pages/base/base.module';
import { QuizRoutingModule } from '../app/quiz-routes.module'

import { UserService } from '../services/user.service';
import { QuestionService } from '../services/question.service';

import { LoginPage } from '../pages/authentication/login/login.component';
import { RegistrationPage } from '../pages/authentication/registration/registration.component';
import { QuestionsComponent } from '../pages/quiz/questions/questions';
import { QuestionformComponent } from '../components/questionform/questionform';


@NgModule({
  declarations: [
    LoginPage,
    RegistrationPage,
    QuestionsComponent,
    QuestionformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BaseModule,
    FormsModule,
    QuizRoutingModule
  ],

  providers: [ UserService, QuestionService ]
})
export class QuizModule {}


