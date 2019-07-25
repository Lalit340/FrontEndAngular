import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskToProjectComponent } from './add-task-to-project.component';

describe('AddTaskToProjectComponent', () => {
  let component: AddTaskToProjectComponent;
  let fixture: ComponentFixture<AddTaskToProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskToProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
