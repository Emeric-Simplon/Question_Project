import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { MaterialModule } from './material.module';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { QuestionCreateComponent } from './question-create/question-create.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionsListComponent,
    ErrorpageComponent,
    QuestionCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
