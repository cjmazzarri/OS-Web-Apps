import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCourseStatisticComponent } from './show-course-statistic.component';

describe('ShowCourseStatisticComponent', () => {
  let component: ShowCourseStatisticComponent;
  let fixture: ComponentFixture<ShowCourseStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCourseStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCourseStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
