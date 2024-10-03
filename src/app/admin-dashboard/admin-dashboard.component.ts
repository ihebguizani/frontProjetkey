import { Component } from '@angular/core';
import {AdminServiceService} from "../admin-service.service";
import {KeycloakServiceService} from "../keycloak-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  userId?: string;
  roleName?: string;
  message?: string;
  token: any | null = null;

  constructor(private keycloak:KeycloakServiceService,
              private Route:Router){}

  addRole() {
    try {
      const role = {
        name: this.roleName,
        description: `Role ${this.roleName}`
      };
      this.token = this.keycloak.getToken();

      this.keycloak.addRole(role).subscribe(() => {
        console.log('Role created successfully',role);
        this.Route.navigate(['roleDetails'])
      });
    } catch (error){
      console.log(error,"MY ERROR")
    }
  }

}
