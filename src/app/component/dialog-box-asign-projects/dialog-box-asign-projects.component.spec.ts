import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoxAsignProjectsComponent } from './dialog-box-asign-projects.component';

describe('DialogBoxAsignProjectsComponent', () => {
  let component: DialogBoxAsignProjectsComponent;
  let fixture: ComponentFixture<DialogBoxAsignProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBoxAsignProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoxAsignProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
