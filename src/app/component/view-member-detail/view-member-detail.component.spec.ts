import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMemberDetailComponent } from './view-member-detail.component';

describe('ViewMemberDetailComponent', () => {
  let component: ViewMemberDetailComponent;
  let fixture: ComponentFixture<ViewMemberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMemberDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
