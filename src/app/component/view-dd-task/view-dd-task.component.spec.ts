import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDdTaskComponent } from './view-dd-task.component';

describe('ViewDdTaskComponent', () => {
  let component: ViewDdTaskComponent;
  let fixture: ComponentFixture<ViewDdTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDdTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
