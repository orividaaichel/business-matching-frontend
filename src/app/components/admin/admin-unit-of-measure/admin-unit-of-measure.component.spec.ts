import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnitOfMeasureComponent } from './admin-unit-of-measure.component';

describe('AdminUnitOfMeasureComponent', () => {
  let component: AdminUnitOfMeasureComponent;
  let fixture: ComponentFixture<AdminUnitOfMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUnitOfMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnitOfMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
