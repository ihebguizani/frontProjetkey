import {CanActivate, CanActivateFn, Router} from '@angular/router';
import {KeycloakService} from "keycloak-angular";

export class RoleGuard implements CanActivate {

  constructor(private keycloak: KeycloakService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    const isLoggedIn = await this.keycloak.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    const userRoles = this.keycloak.getUserRoles();
    return false;

  }
}
