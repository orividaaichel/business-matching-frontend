import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniWebsiteComponent } from './mini-website.component';

describe('MiniWebsiteComponent', () => {
  let component: MiniWebsiteComponent;
  let fixture: ComponentFixture<MiniWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
