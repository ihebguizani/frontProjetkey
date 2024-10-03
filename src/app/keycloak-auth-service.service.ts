import {Injectable, OnInit} from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class KeycloakAuthService{
  constructor(private keycloakService: KeycloakService,
              private  router:Router) {}

 init() {
    return this.keycloakService.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'MySuperApplicationRealm',
        clientId: 'my-super-client'
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false
      },
        bearerPrefix: 'Bearer'
      }).then(() => {
      const token = this.keycloakService.getKeycloakInstance().token;
      if (token) {
        localStorage.setItem('keycloak-token', token);
      }
      const userRoles = this.keycloakService.getUserRoles();
      console.log(userRoles);

      if (userRoles.includes('admin')) {
        this.router.navigate(['/admin']);
      } else if (userRoles.includes('user')) {
        this.router.navigate(['/homeAll']);
      } else {
        this.router.navigate(['/']);
      }

    });

  }

  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }
  login() {
    this.keycloakService.login();
    const userRoles = this.keycloakService.getUserRoles();
    console.log(userRoles);

    if (userRoles.includes('admin')) {
      this.router.navigate(['/admin']);
    } else if (userRoles.includes('user')) {
      this.router.navigate(['/user']);
    } else {
      this.router.navigate(['/unauthorized']);
    }
  }


  logout() {
    this.keycloakService.logout();


  }

  getUsername(): string {
    return this.keycloakService.getUsername();
  }

  getToken(): Promise<string> {
    return this.keycloakService.getToken();
  }
  registre(){
    this.keycloakService.register();
  }
}
