import { Component, OnInit } from '@angular/core';
import {KeycloakAuthService} from "../keycloak-auth-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


  constructor(private keycloakService: KeycloakAuthService) {}


  login2() {
    this.keycloakService.login();
  }
  register(){
    this.keycloakService.registre();
  }
}
