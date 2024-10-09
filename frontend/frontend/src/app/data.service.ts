import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface company {
  name: string;
  category: string;
  description: string;
}
export interface Topic {
  id: number;
  name: string;
  category: string;
  companyId: number;
}
export interface question{
question: string;
topicId: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

getTopicsByCompanyId(companyId: number): Observable<Topic[]> {
  return this.http.get<Topic[]>(`${this.apiUrl}/topics/${companyId}/Internship`);
}
getPlacementTopicsByCompanyId(companyId: number): Observable<Topic[]> {
  return this.http.get<Topic[]>(`${this.apiUrl}/topics/${companyId}/Placement`);
}

getCompanyList(categories: string[]): Observable<any> {
  let params = new HttpParams();
  categories.forEach(category => {
  params = params.append('categories', category);
});
  return this.http.get(`${this.apiUrl}/companies`,  { params });
}

getCompanyById(companyId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${companyId}`);
}

addCompany(company: company): Observable<company> {
  return this.http.post<company>(`${this.apiUrl}/add-company`, company);
}

addQuestion(question: question): Observable<question> {
  return this.http.post<question>(`${this.apiUrl}/add-question`, question);
}

addTopic(topic:{ name: string; category: string; companyId: number;}): Observable<Topic>{
  return this.http.post<Topic>(`${this.apiUrl}/add-topic`, topic);
}

getQuestionsByTopicId(topicId: number): Observable<question[]> {
  return this.http.get<question[]>(`${this.apiUrl}/questions/${topicId}`);
}

addPlacementQuestion(question: question): Observable<question> {
  return this.http.post<question>(`${this.apiUrl}/add-PlacementQuestion`, question);
}

addPlacementTopic(topic:{ name: string; category: string; companyId: number;}): Observable<Topic>{
  return this.http.post<Topic>(`${this.apiUrl}/add-PlacementTopic`, topic);
}

getPlacementQuestionsByTopicId(topicId: number): Observable<question[]> {
  return this.http.get<question[]>(`${this.apiUrl}/PlacementQuestions/${topicId}`);
}

private topics: { id: number; name: string; category: string; companyId: number;}[] = [];
setTopics(topics: { id: number; name: string; category: string; companyId: number;}[]) {
this.topics = topics;
}

getTopics() {
  return this.topics;
}

// Company!: { id: number; name: string; category: string; description: string; };
// setCompany(Company: { id: number; name: string; category: string; description: string;}) {
//   this.Company = Company;
//   console.log('from set',this.Company);
//   }

//   getCompany() {
//     console.log('from get',this.Company);
//     return this.Company;
//   }
}
