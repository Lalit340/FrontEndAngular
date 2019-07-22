import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialodBoxComponent } from './dialod-box.component';

describe('DialodBoxComponent', () => {
  let component: DialodBoxComponent;
  let fixture: ComponentFixture<DialodBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialodBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialodBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
