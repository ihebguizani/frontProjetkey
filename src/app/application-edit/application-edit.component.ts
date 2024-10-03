import {Component, OnInit} from '@angular/core';
import {Application} from "../application";
import {ActivatedRoute, Router} from "@angular/router";
import {ApplicationService} from "../application.service";

@Component({
  selector: 'app-application-edit',
  templateUrl: './application-edit.component.html',
  styleUrl: './application-edit.component.css'
})
export class ApplicationEditComponent  implements OnInit{
  application: Application = {
    applicationId: 0,
    type: '',
    status: '',
    createdAt:''
  };
  applicationId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    this.applicationId = +this.route.snapshot.paramMap.get('id')!;
    this.loadApplication();
  }

  loadApplication(): void {
    this.applicationService.getApplicationById(this.applicationId).subscribe(data => {
      this.application = data;
    });
  }

  updateApplication(): void {
    console.log(this.application);
    this.applicationService.updateApplication(this.applicationId, this.application).subscribe(() => {

      this.router.navigate(['/applications']);
    });
  }

}
