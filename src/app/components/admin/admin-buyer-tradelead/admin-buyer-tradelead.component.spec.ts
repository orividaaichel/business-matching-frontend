import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBuyerTradeleadComponent } from './admin-buyer-tradelead.component';

describe('AdminBuyerTradeleadComponent', () => {
  let component: AdminBuyerTradeleadComponent;
  let fixture: ComponentFixture<AdminBuyerTradeleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBuyerTradeleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBuyerTradeleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
