import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KeycloakAngularModule} from "keycloak-angular";
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {KeycloakAuthService} from "./keycloak-auth-service.service";
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ProductComponent } from './product/product.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {FormsModule} from "@angular/forms";
import { ListUserComponent } from './list-user/list-user.component';
import { KeycloakComponent } from './keycloak/keycloak.component';
import {AuthInterceptor} from "./auth.interceptor";
import { RoleComponent } from './role/role.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeALlComponent } from './home-all/home-all.component';
import { ServicesComponent } from './services/services.component';
import { NavBarUComponent } from './nav-bar-u/nav-bar-u.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationCreateComponent } from './application-create/application-create.component';
import { ApplicationEditComponent } from './application-edit/application-edit.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
function initializeKeycloak(keycloak: KeycloakAuthService) {
  return () => keycloak.init();
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    UnauthorizedComponent,
    ProductComponent,
    AdminDashboardComponent,
    ListUserComponent,
    KeycloakComponent,
    RoleComponent,
    MenuComponent,
    FooterComponent,
    HomeALlComponent,
    ServicesComponent,
    NavBarUComponent,
    UserDetailsComponent,
    ApplicationListComponent,
    ApplicationCreateComponent,
    ApplicationEditComponent,
    ApplicationDetailsComponent,
    SimpleModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakAuthService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
