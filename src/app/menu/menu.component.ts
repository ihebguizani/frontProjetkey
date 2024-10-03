import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  userName:any;
  constructor(private keycloak:KeycloakService,
              private route:Router) {
  }
  loadUserProfile(): void {
    this.keycloak.loadUserProfile().then((profile) => {
      this.userName = profile.username;
    }).catch(err => {
      console.error('Failed to load user profile', err);
    });
  }
  ngOnInit(): void {
    this.loadUserProfile();
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
