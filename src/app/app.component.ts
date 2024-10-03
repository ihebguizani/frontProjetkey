import { Component } from '@angular/core';
import {KeycloakAuthService} from "./keycloak-auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'keycloak-angular-app';
  constructor(private keycloak:KeycloakAuthService) {
  }
  login(){
    this.keycloak.login();
  }
  logout(){
    this.keycloak.logout();
  }
}
