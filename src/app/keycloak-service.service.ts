import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {KeycloakService} from "keycloak-angular";

interface RoleRepresentation {
  id: string;
  name: string;
}

interface UserRepresentation { id: string;
  username: string;
  enabled: boolean;
  firstName: string;
  lastName: string;
  email: string;
  requiredActions: string[];
  realmRoles:string;
  clientRoles:String;
  access: {
    manageGroupMembership: boolean;
    view: boolean;
    mapRoles: boolean;
    impersonate: boolean;
    manage: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class KeycloakServiceService {

  private baseUrl = 'http://localhost:8081'; // Replace with your backend URL

  constructor(private http: HttpClient,
              private keycloakService: KeycloakService) { }

  getClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-clients`);
  }

  getClientByName(clientName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-client-by-name`, { params: { clientName } });
  }

  createRole(clientUuid: string, role: any): Observable<any> {
    const url = `${this.baseUrl}/addRole/${clientUuid}`;
    return this.http.post(url, role);

  }
  addRole(role:any):Observable<any>{
    const url = `${this.baseUrl}/addRole`;
    return this.http.post(url, role);
  }
  getToken() {
    return localStorage.getItem('keycloak-token') || '';
  }
  getRoles(): Observable<RoleRepresentation[]> {
    return this.http.get<RoleRepresentation[]>(`${this.baseUrl}/roles`);
  }

  getRoleByName(clientUuid: string, roleName: string): Observable<RoleRepresentation> {
    return this.http.get<RoleRepresentation>(`${this.baseUrl}/roleByName/${clientUuid}`, {
      params: { roleName }
    });
  }
  deleteRoleById(role_id:String):Observable<any>{
    return this.http.delete(`${this.baseUrl}/roles-by-id/${role_id}` );
  }
  getUserById(user_id:String):Observable<any>{
    return this.http.get<UserRepresentation>(`${this.baseUrl}/users-by-id/${user_id}`);
  }
  deleteUserById(user_id:String):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete-users-by-id/${user_id}` );
  }
  assignRoleToUser(userId: string, roleName: string): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/${userId}/roles/${roleName}`, {});
  }
}
