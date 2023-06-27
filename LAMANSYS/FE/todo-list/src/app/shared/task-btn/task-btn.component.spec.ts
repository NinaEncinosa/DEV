import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBtnComponent } from './task-btn.component';

describe('TaskBtnComponent', () => {
  let component: TaskBtnComponent;
  let fixture: ComponentFixture<TaskBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskBtnComponent]
    });
    fixture = TestBed.createComponent(TaskBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
