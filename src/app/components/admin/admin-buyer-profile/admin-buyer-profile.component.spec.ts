import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuyerProfileComponent } from './admin-buyer-profile.component';

describe('AdminBuyerProfileComponent', () => {
  let component: AdminBuyerProfileComponent;
  let fixture: ComponentFixture<AdminBuyerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBuyerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuyerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
