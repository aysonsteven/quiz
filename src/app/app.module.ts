import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { QuizModule } from '../apps/quiz/app/quiz.module';

import { AppComponent } from './app.component';

import { HelpPage } from '../pages/help/help';

const appRoutes: Routes = [
  { path: 'help', component: HelpPage}
];

@NgModule({
  declarations: [
    AppComponent,
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


