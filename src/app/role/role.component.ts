import {Component, OnInit} from '@angular/core';
import {KeycloakServiceService} from "../keycloak-service.service";
import {Role} from "../role";
import {Router} from "@angular/router";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit{
  roles: Role[] = [];

  constructor(private keycloakService: KeycloakServiceService,
              private router:Router) { }

  ngOnInit(): void {
    this.keycloakService.getRoles().subscribe((roles: Role[]) => {
      this.roles = roles;
      console.log(roles);
    });
  }

  deleteRole(id:string) {
    this.keycloakService.deleteRoleById(id).subscribe((data:any)=>this.roles=data);
    window.location.reload();

  }
  confirmDelete(index: string) {
    if (confirm("Are you sure you want to delete this role?")) {
      this.deleteRole(index);
    }
  }

  addRole() {
    this.router.navigate(['/role'])
  }
}
