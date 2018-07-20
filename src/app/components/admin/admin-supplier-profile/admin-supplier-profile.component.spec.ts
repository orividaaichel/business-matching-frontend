import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupplierProfileComponent } from './admin-supplier-profile.component';

describe('AdminSupplierProfileComponent', () => {
  let component: AdminSupplierProfileComponent;
  let fixture: ComponentFixture<AdminSupplierProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSupplierProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSupplierProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
