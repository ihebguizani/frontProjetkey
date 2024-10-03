import {Component, OnInit} from '@angular/core';
import {Application} from "../application";
import {ApplicationService} from "../application.service";

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.css'
})
export class ApplicationListComponent implements OnInit{
  applications: Application[] = [];

  constructor(private applicationService: ApplicationService) {}

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.applicationService.getAllApplications().subscribe(data => {
      this.applications = data;
    });
  }

  deleteApplication(applicationId: number): void {
    this.applicationService.deleteApplication(applicationId).subscribe(() => {
      this.loadApplications();  // Refresh the list after deletion
    });
  }
}
