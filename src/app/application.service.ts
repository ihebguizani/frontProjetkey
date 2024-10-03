import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Application} from "./application";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private baseUrl = 'http://localhost:8081/application';  // Update with your actual Spring Boot backend URL

  constructor(private http: HttpClient) {}

  getAllApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.baseUrl}/getAll`);
  }

  getApplicationById(applicationId: number): Observable<Application> {
    return this.http.get<Application>(`${this.baseUrl}/getById/${applicationId}`);
  }

  createApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(`${this.baseUrl}/create`, application);
  }

  updateApplication(applicationId: number, application: Application): Observable<Application> {
    return this.http.put<Application>(`${this.baseUrl}/update/${applicationId}`, application);
  }

  deleteApplication(applicationId: number): Observable<Application[]> {
    return this.http.delete<Application[]>(`${this.baseUrl}/delete/${applicationId}`);
  }
}
