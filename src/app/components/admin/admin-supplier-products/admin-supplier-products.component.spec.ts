import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupplierProductsComponent } from './admin-supplier-products.component';

describe('AdminSupplierProductsComponent', () => {
  let component: AdminSupplierProductsComponent;
  let fixture: ComponentFixture<AdminSupplierProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSupplierProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSupplierProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
