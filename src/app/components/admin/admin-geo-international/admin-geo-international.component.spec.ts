import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGeoInternationalComponent } from './admin-geo-international.component';

describe('AdminGeoInternationalComponent', () => {
  let component: AdminGeoInternationalComponent;
  let fixture: ComponentFixture<AdminGeoInternationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGeoInternationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGeoInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
