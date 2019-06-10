import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Question } from './models/question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl = 'http://localhost:3000/api/v1/';

  private questionCreated = new  BehaviorSubject<any>({});

  currentQuestion = this.questionCreated.asObservable();

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${this.baseUrl}/get-list`)
    
  }

  dispatchQuestionCreated(question) {
    this.questionCreated.next(question);
  }

  handleQuestionCreated() {
    return this.questionCreated.asObservable();
  }

  getQuestionById(id): Observable<Question> {
    return this.httpClient.get<Question>(`${this.baseUrl}/questions/${id}`);
  } 

  deleteQuestion(id): Observable<Question> {
    return this.httpClient.delete<Question>(`${this.baseUrl}/questions/${id}`);
  }
  createQuestion(question: Question) {
    return this.httpClient.post<Question>(`${this.baseUrl}/questions/`, question);
  }

}
