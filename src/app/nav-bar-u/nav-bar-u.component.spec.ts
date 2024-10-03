import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarUComponent } from './nav-bar-u.component';

describe('NavBarUComponent', () => {
  let component: NavBarUComponent;
  let fixture: ComponentFixture<NavBarUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
