import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdgroupServicesCategoryComponent } from './admin-prodgroup-services-category.component';

describe('AdminProdgroupServicesCategoryComponent', () => {
  let component: AdminProdgroupServicesCategoryComponent;
  let fixture: ComponentFixture<AdminProdgroupServicesCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdgroupServicesCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdgroupServicesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
