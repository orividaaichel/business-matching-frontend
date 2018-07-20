import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdgroupProductCategoryComponent } from './admin-prodgroup-product-category.component';

describe('AdminProdgroupProductCategoryComponent', () => {
  let component: AdminProdgroupProductCategoryComponent;
  let fixture: ComponentFixture<AdminProdgroupProductCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdgroupProductCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdgroupProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
