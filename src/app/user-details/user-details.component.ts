import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {KeycloakServiceService} from "../keycloak-service.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  user: any | null = null;
  userId:any;
  constructor(
    private route: ActivatedRoute,
    private userService: KeycloakServiceService
  ) { }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.userService.getUserById( this.userId).subscribe((user: any) => {
      this.user = user;
    });
  }

  onDelete(id:String) {

    this.userService.deleteUserById(id).subscribe((data:any)=>this.user=data);

  }
}
