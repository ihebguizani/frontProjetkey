import { Component } from '@angular/core';
import {KeycloakAuthService} from "../keycloak-auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private keycloak:KeycloakAuthService,
              private route:Router) {
  }
  logout(){
    this.keycloak.logout();
  }

  goTo(){
    this.route.navigate(['product']);

  }

}
