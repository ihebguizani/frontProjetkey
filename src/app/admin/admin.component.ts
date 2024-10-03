import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
    constructor(private keycloak:KeycloakService,
                private route:Router) {
    }

  ngOnInit(): void {
    // Initialisation des données ou autres opérations à faire au chargement du composant
    console.log('AdminDashboardComponent initialized');
  }
  logout(){
    this.keycloak.logout()
  }
  goTo(){
      this.route.navigate(['product']);

  }

  role() {
    this.route.navigate(['role'])
  }

  goToUsers() {
    this.route.navigate(['users']);
  }

  goToKey() {
    this.route.navigate(['key']);
  }

  goToRole() {
    this.route.navigate(['roleDetails'])
  }
}
