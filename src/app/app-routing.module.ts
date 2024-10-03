import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakService} from "keycloak-angular";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {RoleGuard} from "./role.guard";
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";
import {ProductComponent} from "./product/product.component";
import {HomeComponent} from "./home/home.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {KeycloakComponent} from "./keycloak/keycloak.component";
import {RoleComponent} from "./role/role.component";
import {HomeALlComponent} from "./home-all/home-all.component";
import {ServicesComponent} from "./services/services.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {ApplicationListComponent} from "./application-list/application-list.component";
import {ApplicationCreateComponent} from "./application-create/application-create.component";
import {ApplicationEditComponent} from "./application-edit/application-edit.component";
import {ApplicationDetailsComponent} from "./application-details/application-details.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'role', component: AdminDashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'admin', component: AdminComponent },
  { path:'user/:id',component:UserDetailsComponent},
  { path:'users',component:ListUserComponent},
  { path: 'key', component: KeycloakComponent },
  { path:'roleDetails', component: RoleComponent},
  { path:'homeAll', component:HomeALlComponent},
  { path:'services', component:ServicesComponent},
  { path:'user',component:UserComponent},
  { path: 'applications', component: ApplicationListComponent },
  { path: 'create', component: ApplicationCreateComponent },
  { path: 'edit/:id', component: ApplicationEditComponent },
  { path: 'details/:id', component: ApplicationDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private keycloak: KeycloakService) { }
}
