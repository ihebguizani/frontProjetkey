import { Component } from '@angular/core';
import {Application} from "../application";
import {ApplicationService} from "../application.service";
import {Router} from "@angular/router";
import {KeycloakServiceService} from "../keycloak-service.service";

@Component({
  selector: 'app-application-create',
  templateUrl: './application-create.component.html',
  styleUrl: './application-create.component.css'
})
export class ApplicationCreateComponent {
  application: Application = {
    applicationId:0,
    type: '',
    status: '',
    createdAt:''
  };
  token: string = '';

  constructor(private applicationService: ApplicationService,
              private router: Router,

              private keycloakService:KeycloakServiceService) {}

  saveApplication(): void {
    this.token = this.keycloakService.getToken();
    this.applicationService.createApplication(this.application).subscribe(() => {
      this.router.navigate(['/applications']);
    });
  }
}
