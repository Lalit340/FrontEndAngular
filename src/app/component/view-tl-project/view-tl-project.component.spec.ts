import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTlProjectComponent } from './view-tl-project.component';

describe('ViewTlProjectComponent', () => {
  let component: ViewTlProjectComponent;
  let fixture: ComponentFixture<ViewTlProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTlProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTlProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
