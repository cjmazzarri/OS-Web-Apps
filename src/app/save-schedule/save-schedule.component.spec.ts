import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveScheduleComponent } from './save-schedule.component';

describe('SaveScheduleComponent', () => {
  let component: SaveScheduleComponent;
  let fixture: ComponentFixture<SaveScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
