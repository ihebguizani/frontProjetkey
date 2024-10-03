import { Component } from '@angular/core';
import {KeycloakAuthService} from "../keycloak-auth-service.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-nav-bar-u',
  templateUrl: './nav-bar-u.component.html',
  styleUrl: './nav-bar-u.component.css'
})
export class NavBarUComponent {
  userName:any;
  constructor(private keycloak:KeycloakAuthService,
              private keycloakserv:KeycloakService) {
  }
  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.keycloakserv.loadUserProfile().then((profile) => {
      this.userName = profile.username;
    }).catch(err => {
      console.error('Failed to load user profile', err);
    });
  }

  logout() {
    this.keycloak.logout();

  }
}
