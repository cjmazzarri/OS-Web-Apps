import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveScheduleSuccesComponent } from './save-schedule-success.component';

describe('SaveScheduleSuccesComponent', () => {
  let component: SaveScheduleSuccesComponent;
  let fixture: ComponentFixture<SaveScheduleSuccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveScheduleSuccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveScheduleSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
