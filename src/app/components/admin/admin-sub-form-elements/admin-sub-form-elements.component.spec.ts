import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubFormElementsComponent } from './admin-sub-form-elements.component';

describe('AdminSubFormElementsComponent', () => {
  let component: AdminSubFormElementsComponent;
  let fixture: ComponentFixture<AdminSubFormElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubFormElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubFormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
