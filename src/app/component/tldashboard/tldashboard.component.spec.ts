import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLDashboardComponent } from './tldashboard.component';

describe('TLDashboardComponent', () => {
  let component: TLDashboardComponent;
  let fixture: ComponentFixture<TLDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
