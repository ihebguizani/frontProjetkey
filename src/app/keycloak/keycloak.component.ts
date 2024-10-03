import {Component, OnInit} from '@angular/core';
import {KeycloakServiceService} from "../keycloak-service.service";

@Component({
  selector: 'app-keycloak',
  templateUrl: './keycloak.component.html',
  styleUrl: './keycloak.component.css'
})
export class KeycloakComponent implements OnInit {
  clients: any[] = [];
  searchedClients: any[] = [];
  clientName: string = '';
  realm: string = '';
  clientUuid: string = '';
  roleName: string = '';
  token: any | null = null;


  constructor(private keycloakService: KeycloakServiceService) { }

  ngOnInit() {
    this.token = this.keycloakService.getToken();
    console.log('Keycloak Token:', this.token);
    this.keycloakService.getClients().subscribe(data => {
      this.clients = data;
      console.log(data);
    });
  }

  searchClient() {
    this.keycloakService.getClientByName(this.clientName).subscribe(data => {
      this.searchedClients = data;
      this.searchedClients.forEach(client => {
        console.log(client.id); // Access the id here
      });
    });
  }

  createRole() {
    try {
      const role = {
        name: this.roleName,
        description: `Role ${this.roleName}`
      };
      this.token = this.keycloakService.getToken();

      this.keycloakService.addRole(role).subscribe(() => {
        console.log('Role created successfully',role);
      });
    } catch (error){
      console.log(error,"MY ERROR")
    }
  }
}
