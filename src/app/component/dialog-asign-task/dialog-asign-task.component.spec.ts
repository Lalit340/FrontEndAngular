import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAsignTaskComponent } from './dialog-asign-task.component';

describe('DialogAsignTaskComponent', () => {
  let component: DialogAsignTaskComponent;
  let fixture: ComponentFixture<DialogAsignTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAsignTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAsignTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
