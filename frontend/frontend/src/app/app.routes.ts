// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyFormComponent } from './components/addCompanyForm/addCompanyForm.component';
import { AddQuestionComponent } from './components/addQuestion/addQuestion.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';


const routes: Routes = [
  { path: '', component: CardPageComponent },
  { path: 'topic-list/:companyId/:value', component: TopicListComponent },
  { path: 'question-list/:topicId/:value', component: QuestionListComponent },
  { path: 'addCompanyForm', component: AddCompanyFormComponent },
  { path: 'addQuestion/:value/:category/:companyId', component: AddQuestionComponent },
  { path: 'PlacementTopic-list/:companyId', component: TopicListComponent },
  { path: 'PlacementQuestion-list/:topicId', component: QuestionListComponent },
  { path: 'addPlacementQuestion', component: AddQuestionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export { routes };

