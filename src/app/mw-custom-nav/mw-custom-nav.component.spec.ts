import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwCustomNavComponent } from './mw-custom-nav.component';

describe('MwCustomNavComponent', () => {
  let component: MwCustomNavComponent;
  let fixture: ComponentFixture<MwCustomNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwCustomNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwCustomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
