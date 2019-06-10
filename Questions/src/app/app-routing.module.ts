import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


const routes: Routes = [
  { path: '', component: QuestionsListComponent },
  { path: 'questions/:id', component: QuestionsComponent },
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
