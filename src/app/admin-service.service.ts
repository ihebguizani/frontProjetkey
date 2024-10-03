import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {KeycloakAuthService} from "./keycloak-auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient,
              private keycloak:KeycloakAuthService) { }

  getAdminGreeting(): Observable<string>{
    return  this.http.get<string>(`http://localhost:8081/api/admin`);
  }
  private apiUrl = 'http://localhost:8081/api/admin';



  addRole(userId: string, roleName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-role`, { userId, roleName });
  }

  removeRole(userId: string, roleName: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/remove-role`, {
      params: { userId, roleName }
    });
  }
}
