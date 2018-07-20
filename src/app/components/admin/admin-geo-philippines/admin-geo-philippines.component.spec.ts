import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGeoPhilippinesComponent } from './admin-geo-philippines.component';

describe('AdminGeoPhilippinesComponent', () => {
  let component: AdminGeoPhilippinesComponent;
  let fixture: ComponentFixture<AdminGeoPhilippinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGeoPhilippinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGeoPhilippinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
