import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainFormElementsComponent } from './admin-main-form-elements.component';

describe('AdminMainFormElementsComponent', () => {
  let component: AdminMainFormElementsComponent;
  let fixture: ComponentFixture<AdminMainFormElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMainFormElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainFormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
