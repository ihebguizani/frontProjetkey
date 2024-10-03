import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeALlComponent } from './home-all.component';

describe('HomeALlComponent', () => {
  let component: HomeALlComponent;
  let fixture: ComponentFixture<HomeALlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeALlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeALlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
