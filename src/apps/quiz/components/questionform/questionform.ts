import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { UserService } from '../../services/user.service';
interface form{
  question  : string;
  choice1   : string;
  choice2   : string;
  choice3   : string;
  choice4   : string;
  answer    : string;
  timer     : number;
}

@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.html',
  inputs:['question', 'questions_list', 'index']
})
export class QuestionformComponent implements OnInit {
  index;
  questions_list =[];
  question = {};
  content;
  questionForm: form = <form>{};
  exam_idx:number;
  question_idx;
  categoryInfo  = [];
  switch:boolean = false;
  subjectInfo= [];

  inDeleting: boolean = false;
  inPosting: boolean = false;

    @Input()  post_id : string = null;
    @Input()  current ;
    @Input()  mode    : 'question.write';
    @Output() postLoad   = new EventEmitter();
    @Output() error      = new EventEmitter();
    @Output() success    = new EventEmitter();
    @Output() cancel     = new EventEmitter();
    @Input()  root = null;
    @Input()  posts: any = null;

  submit = new EventEmitter();
  constructor(
      public questionService : QuestionService,
      private userService    : UserService
  ) { 
    //   this.userService.logged( res =>{
    //       this.question_idx = res;
    //   })
  }




  ngOnInit() {
    // this.initialize_data();
  }



  initialize_data(){
    ////initializing form data for editing
    // if( this.dataService.question_data.idx ){
    //   this.questionForm.question = this.dataService.question_data.content;
    //   this.questionForm.choice1  = this.dataService.question_data.varchar_1;
    //   this.questionForm.choice2  = this.dataService.question_data.varchar_2;
    //   this.questionForm.choice3  = this.dataService.question_data.varchar_3;
    //   this.questionForm.choice4  = this.dataService.question_data.varchar_4;
    //   this.questionForm.answer   = this.dataService.question_data.varchar_5;
    //   this.subject_idx = this.dataService.question_data.varchar_6;
    // }
  }







  successCallback( re ) {
    if ( this.mode == "question.write" ) {
        try {
            if ( ! this.question_idx ) {
                console.log("posts: ", this.posts);
                console.log("re: ", re);
                this.posts.push( re.post );
            }else{
              
            //   this.posts.splice( this.dataService.question_index, 1, re.post )
            }
        }
        catch ( e ) { alert("Please restart the app." + e ); }
    }
    this.questionForm = <form>{};
    // this.dataService.question_data = <POST_DATA>{};
    this.success.emit();
  }





  errorCallback( error ) {
      console.log('error' + error );
  }



  completeCallback() {
      this.inPosting = false;

  }



  onClickCancel() {
    //   this.questionForm = <form>{};
    //   this.dataService.question_data = <POST_DATA>{};
      this.cancel.emit();
  }




  onClickSubmit(){
    // console.log('save question');
    // 
    // 
    //     
    // if( this.dataService.question_data.idx ){
    //   this.update( data );///post.update
    //   return;
    // }
    this.create( this.questionForm );///post.create
  }

  passing_question_data( question_data ){
        question_data.content   = this.questionForm.question;
        question_data.varchar_1 = this.questionForm.choice1;
        question_data.varchar_2 = this.questionForm.choice2;
        question_data.varchar_3 = this.questionForm.choice3;
        question_data.varchar_4 = this.questionForm.choice4;
        question_data.varchar_5 = this.questionForm.answer;
        // question_data.varchar_6 = this.subject_idx;
        return question_data;
  }

  create( question_data ){
      this.questionService.create( question_data ,            
            s => this.successCallback( s ),
            e => this.errorCallback( e ),
            () => this.completeCallback())
  }

  update( question_data ){
    //   question_data.idx = this.dataService.question_data.idx;
      
    //   this.post.update( question_data ,            
    //         s => this.successCallback( s ),
    //         e => this.errorCallback( e ),
    //         () => this.completeCallback())
  }

}
