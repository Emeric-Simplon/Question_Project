import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  questions:Question[];

  constructor( private questionService: QuestionService) { 
  }

  ngOnInit() {
    this.questionService.getList().subscribe((questions)=> {
      this.questions = questions;
      this.questionService.currentQuestion.subscribe((question) => {
        console.log(question);
        this.questions.unshift(question);
      });
    })

  }
}
