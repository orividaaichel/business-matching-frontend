import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdgroupHsCodesComponent } from './admin-prodgroup-hs-codes.component';

describe('AdminProdgroupHsCodesComponent', () => {
  let component: AdminProdgroupHsCodesComponent;
  let fixture: ComponentFixture<AdminProdgroupHsCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdgroupHsCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdgroupHsCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
