import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../models/question';




@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit {
  creationForm: FormGroup;
  allQuestions: Question[];

  constructor(private router: Router ,private activatedRoute: ActivatedRoute, private fb: FormBuilder, private questionService: QuestionService) {}


  ngOnInit() {
    this.createForm();
    this.questionService.handleQuestionCreated().subscribe(data => {
      console.log('created receved', data);
      this.refresh(data);
    });
  }
  createForm() {
  this.creationForm = this.fb.group({
     question: '',
     auteur: '',
     theme: ''
    });
  }
  createQuestion(formDirective: FormGroupDirective){
    if (this.creationForm.valid){
    console.log(this.creationForm);
    this.questionService
    .createQuestion(this.creationForm.value)
    .subscribe(data => this.handleSuccess(data, formDirective), error => this.handleError(error))};7
  } 
  handleSuccess(data, formDirective) {
    this.questionService.dispatchQuestionCreated(data._id);
    this.creationForm.reset();
    formDirective.resetForm();
    console.log("OK Question created", data);
  }
  handleError (error) {
    console.log("KO Question not created", error)
  }
  refresh(data) {
    console.log('data', data);
    this.questionService.getList().subscribe(data => {
      this.allQuestions = data;
    })
  }
}
