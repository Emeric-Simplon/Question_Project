import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '../models/question';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  baseUrl = 'http://localhost:3000/api/v1/questions';

  question$: Observable<Question>;
  allQuestions: Question[];


  constructor( private router: Router ,private activatedRoute: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.question$ = this.questionService.getQuestionById(id);
    this.questionService.getList()
    .subscribe(data => {
      console.log(data);
    })
  }
  deleteQuestion(id: string) {
    this.questionService.deleteQuestion(id).subscribe((res) => {
    this.router.navigateByUrl('/');
    })
   }
}
