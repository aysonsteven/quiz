import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
// import { QuestionService } from '../../../services/question.service';

@Component( {
    selector: 'questions-page',
    templateUrl: './questions.html'
} )

export class QuestionsComponent{
    showForm: boolean = false;
    loading: boolean = true;
    userdata
    question_data = [];
    constructor( public userService : UserService, private router: Router, private questionService: QuestionService ){
        this.userService.logged( res =>{
            this.userdata = res;
        })
        console.log('data ' + this.userdata)
        if( ! this.userdata ){
            this.router.navigate(['/login'])
        }
        this.getQuestionList();
        console.log('question data ' + this.question_data )
    }

  getQuestionList(){
    let opt={
        'mc'       : 'question.search',
        'options'  : {
        'orderby'  :'idx DESC'
      }
    }
    this.questionService.query( opt, res=>{
        console.log( res )
      this.question_data = res.rows
      console.log( res )
      console.log('questions ' + this.question_data)
      this.loading = false;
    }, e=>alert('error ' + e))
  }

  onClickDelete( idx, index ){
      this.questionService.delete( idx, response =>{
          console.log('successfully deleted ' + idx + ' response ' + JSON.stringify(response) )
          this.question_data.splice( index, 1 )
      }, err =>alert('Something went wrong' + err))
  }

  onClickAddQuestions(){
      this.showForm = true;
  }
  editComponentOnCancel(){

  }

  editComponentOnSuccess(){
      
  }

}