import { TestBed } from '@angular/core/testing';

// @ts-ignore
import { KeycloakAuthServiceService } from './keycloak-auth-service.service';

describe('KeycloakAuthServiceService', () => {
  let service: KeycloakAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloakAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
