import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwCompanydescComponent } from './mw-companydesc.component';

describe('MwCompanydescComponent', () => {
  let component: MwCompanydescComponent;
  let fixture: ComponentFixture<MwCompanydescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwCompanydescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwCompanydescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
