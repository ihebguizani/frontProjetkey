import {Component, OnInit} from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {Router} from "@angular/router";
import {KeycloakServiceService} from "../keycloak-service.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{
  users: any[] = [];
  roles: any; // Array to hold the list of roles
  selectedUserId: string = '';
  selectedRole: string = '';
  showModal = false;

  constructor(private userService: UserServiceService,
              private route:Router,
              private keycloak:KeycloakServiceService,
              private modalService: NgbModule) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    }, error => {
      console.error('Error fetching users', error);
    });
    this.loadRoles();
    console.log(this.loadRoles());
  }
  loadRoles(): void {
    // Load roles from the backend (implement this in your service)
    this.keycloak.getRoles().subscribe(roles => this.roles = roles);
    console.log(this.roles);
  }

  details(id:String) {
    this.route.navigate(['/user', id]);

  }

  openAssignRoleModal(userId: string): void {
    this.selectedUserId = userId;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  assignRole(): void {
    if (this.selectedUserId && this.selectedRole) {
      this.keycloak.assignRoleToUser(this.selectedUserId, this.selectedRole).subscribe(
        () => alert('Role assigned successfully'),
        error => alert('Error assigning role: ' + error.message)
      );
      this.closeModal();
    }
  }
}
